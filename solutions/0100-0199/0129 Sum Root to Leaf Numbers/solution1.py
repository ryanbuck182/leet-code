class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        def leafSum(node, prev = 0):
            prev = prev * 10 + node.val

            total = 0
            if node.left is not None:
                total += leafSum(node.left, prev)
            if node.right is not None:
                total += leafSum(node.right, prev)
            if total == 0:
                total = prev
            return total

        return leafSum(root)
