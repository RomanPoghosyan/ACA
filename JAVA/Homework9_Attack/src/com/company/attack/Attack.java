package com.company.attack;

import java.io.DataOutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;


public class Attack {
    private ExecutorService executorService;
    private String url; //default
    private int milliseconds;

    public Attack(String url, int milliseconds, int requestsCount) {
        this.url = url;
        this.milliseconds = milliseconds;
        executorService = new ThreadPoolExecutor(requestsCount, 300, 100, TimeUnit.MILLISECONDS, new ArrayBlockingQueue<>(100));
    }

    public void start(){
        for(int i = 0; i < 200; i++) {
            executorService.submit(() -> {
                try {
                    Thread.sleep(milliseconds);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
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
            });
        }
    }
}
