package tower.of.hanoi;

import java.util.ArrayList;

public class TowerOfHanoi {
    private ArrayList<Integer> firstTower;
    private ArrayList<Integer> secondTower;
    private ArrayList<Integer> thirdTower;
    private int length;

    private void init(int length){
        firstTower = new ArrayList();
        secondTower = new ArrayList();
        thirdTower = new ArrayList();
        this.length = length;
        for(int i = length; i > 0; i--){
            firstTower.add(i);
        }
    }

    public ArrayList<Integer> solveTower(int length){
        init(length);
        hanoiRecursion(firstTower, thirdTower, secondTower, length);
        return thirdTower;
    }


    private void hanoiRecursion(ArrayList<Integer> first, ArrayList<Integer> second, ArrayList<Integer> third, int length){
        if(length == 0) return;

        hanoiRecursion(first, third, second, length - 1);
        fromOneToAnother(first, second);
        hanoiRecursion(third, second, first, length - 1);

    }

    private boolean fromOneToAnother(ArrayList<Integer> first, ArrayList<Integer> second){
        if(first.size() == 0) return false;
        int temp = first.remove(first.size() - 1);
        if(second.size() != 0 && temp > second.get(second.size() - 1)) {
            first.add(temp);
            return false;
        }
        second.add(temp);
        return true;
    }
}

