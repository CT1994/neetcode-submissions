use std::collections::HashSet;

impl Solution {
    pub fn has_duplicate(nums: Vec<i32>) -> bool {
        let mut set: HashSet<i32> = HashSet::new();

        for num in nums.iter() {
            if !set.insert(*num) {
                return true
            }
        }

        false
    }
}
