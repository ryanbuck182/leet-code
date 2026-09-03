class Solution {
    fun fizzBuzz(n: Int): List<String> {
        val list: MutableList<String> = mutableListOf()
        for (i in 1..n) {
            list.add(when {
                i % 15 == 0 -> "FizzBuzz"
                i % 3 == 0 -> "Fizz"
                i % 5 == 0 -> "Buzz"
                else -> i.toString()
            })
        }
        return list
    }
}
