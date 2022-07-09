package Magic;

import javax.swing.table.TableRowSorter;

public class Magic {
  public static void main(String[] args) {
    sayHello();
  }

  public static void twoSum(int[] nums, int target) {
    System.out.println(nums);
    for (int i = 0; i < nums.length; i++) {
      for (int j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) {
          System.out.println(i, j);
        }
      }
    }
  }

  public static void sayHello() {
    System.out.println("say hello!");
  }
}
