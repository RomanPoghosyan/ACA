package tower.of.hanoi;

import java.util.ArrayList;

public class TowerOfHanoi {
    ArrayList<Integer> firstTower;
    ArrayList<Integer> secondTower;
    ArrayList<Integer> thirdTower;
    int length;

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
        hanoiRecursion(firstTower, secondTower, length);
        return thirdTower;
    }


    public boolean hanoiRecursion(ArrayList<Integer> first, ArrayList<Integer> third, int length){
        if(length == 0) return true;

        hanoiRecursion(this.firstTower, this.thirdTower, length - 1);
        fromOneToAnother(first, third);
        hanoiRecursion(this.secondTower, this.thirdTower, length - 1);

        return true;
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

