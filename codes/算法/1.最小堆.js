class MinPQ {
    // 传入比较函数
    constructor(compareFn) {
        // 使用数组模拟二叉树结构，通过索引寻找父子节点
        // 这里使用一个元素占位，是为了方便计算根节点的子节点 2 * k
        this.pq = [null]
        if (compareFn) this.compareFn = compareFn
    }

    // 插入元素
    insert(item) {
        this.pq.push(item)
        this._swim(this.size())
    }

    // 弹出最小值
    pop() {
        if (this.isEmpty()) return
        this._exch(1, this.size())
        const min = this.pq.pop()
        this._sink(1)
        return min
    }

    // 获取最小值
    top() {
        return this.pq[1]
    }

    // 获取元素个数
    size() {
        return this.pq.length - 1
    }

    // 是否为空
    isEmpty() {
        return this.pq.length === 1
    }

    _swim(k) {
        // 如果索引不为 根节点
        while (k > 1) {
            // 寻找父节点
            const parent = this._getParentKey(k)
            // 如果父节点不比当前节点大，上浮结束
            if (!this._big(parent, k)) break;
            // 交换父子节点的值
            this._exch(parent, k)
            // 切换指针指向
            k = parent
        }
    }

    _sink(k) {
        while (k * 2 <= this.size()) {
            // 左子节点
            let child = k * 2
            // 如果右子节点存在，且比左子节点还小，则使用右子节点与父节点比较
            if (child < this.size() && this._big(child, child + 1)) child++
            if (!this._big(k, child)) break;
            this._exch(k, child)
            k = child
        }
    }

    _big(i, j) {
        // 如果有自定义比较函数，则使用自定义函数
        if (this.compareFn) {
            return this.compareFn(this.pq[i], this.pq[j])
        }
        return this.pq[i] > this.pq[j]
    }

    _exch(i, j) {
        let temp = this.pq[i]
        this.pq[i] = this.pq[j]
        this.pq[j] = temp
    }

    _getParentKey(k) {
        return Math.floor(k / 2)
    }
}