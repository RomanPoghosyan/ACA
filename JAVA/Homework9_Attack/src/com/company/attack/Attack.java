package com.company.attack;

import java.io.DataOutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.concurrent.*;


public class Attack {
    private ExecutorService executorService;
    private String url; //default
    private int milliseconds;
    private volatile boolean running = true;

    public Attack(String url, int milliseconds, int requestsCount) {
        this.url = url;
        this.milliseconds = milliseconds;
        executorService = new ThreadPoolExecutor(requestsCount, 300, 100, TimeUnit.MILLISECONDS, new ArrayBlockingQueue<>(100));
    }

    public void start(){
        Runnable task = () -> {
            try {
                URL url = new URL(this.url);
                HttpURLConnection con = (HttpURLConnection) url.openConnection();

                con.setRequestMethod("GET");
                con.setDoOutput(true);
                DataOutputStream out = new DataOutputStream(con.getOutputStream());
                int status = con.getResponseCode();
                System.out.println(status);

                if (status > 299) {
                    System.out.println("Not Ok");
                } else {
                    System.out.println("Ok");
                }

                out.flush();
                out.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        };


        // VERSION 1

        ScheduledExecutorService taskSubmitter = Executors.newScheduledThreadPool(1);
        taskSubmitter.scheduleWithFixedDelay(() -> executorService.submit(task), 0,1, TimeUnit.MILLISECONDS);

        ScheduledExecutorService ses = Executors.newScheduledThreadPool(1);
        ses.schedule(() -> {
            System.out.println("Running task...");
            System.out.println("Tasks done: " + ((ThreadPoolExecutor) executorService).getTaskCount());
            executorService.shutdownNow();
            ses.shutdownNow();
        },milliseconds, TimeUnit.MILLISECONDS);



        // VERSION 2

//        ScheduledExecutorService ses = Executors.newScheduledThreadPool(1);
//        ses.schedule(() -> {
//            running = false;
//            System.out.println("Running task...");
//            System.out.println("Tasks done: " + ((ThreadPoolExecutor) executorService).getTaskCount());
//            executorService.shutdownNow();
//            ses.shutdownNow();
//        },milliseconds, TimeUnit.MILLISECONDS);
//
//        while (running){
//            executorService.submit(task);
//        }
    }

}
