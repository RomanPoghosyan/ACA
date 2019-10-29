package tower.of.hanoi.test;

import tower.of.hanoi.TowerOfHanoi;

import java.util.ArrayList;

public class Test {
    public static void main(String[] args) {
        TowerOfHanoi tof = new TowerOfHanoi();
        ArrayList<Integer> solved = tof.solveTower(6);
        for(int x : solved){
            System.out.println(x);
        }
    }
}
