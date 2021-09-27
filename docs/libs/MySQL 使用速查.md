# 《mysql 必知必会》 速查指南

<div class="diy-menu">

[[toc]]

</div>

> 文章内容均出自 《MySQL 必知必会》，目的在于做出简单梳理，方便查找。

对于数据库的操作，最经典的应用场景就是 `CRUD`，即所谓的增`Create`、删`Delete`、改`Update`、查`Read`。

其中，又以查`Read`最为重要，相关功能操作也是最多。因为你可能不会频繁地对数据库进行变动，而更多是对数据的应用。

**约定**

mysql 中不区分大小写，因此 `SELECT field_name FROM table_name` 等价于 `select field_name from table_name` 。

为了保持可读性，通常将其关键字用大写表示。

## 增
使用 `INSERT INTO` 关键字。
### 添加一整行
```sql
-- 方式1：给出所有字段
INSERT INTO table_name--表名
VALUES(
    -- 对表中每一列必须提供一个值，且次序与表定义的顺序一致
    -- 自动增量列也需赋值 NULL
);

-- 方法2：指定需插入的字段列名，在值中对应给出
-- 更加灵活。可省略部分可以为 NULL 的列。
INSERT INTO table_name(
    field1,
    field2
)--表名
VALUES(
    value1,
    value2
);
```

### 插入多行
在 `sql` 中，一条 `sql` 语句就是对数据库的一次操作。

假如需要插入 `1000` 行，就是 `1000` 次 `sql` 操作。效率比较慢，更有效率的方式是把需要插入的数据拼接字符串，使用一次 `sql` 操作即可。

```sql
INSERT INTO table_name(
    field1,
    field2
)--表名
VALUES(
    value1,
    value2
),(
    value1,
    value2
),(
    -- ...
);
```

## 删
使用 `DELETE FROM` 关键字。
### 删除指定行
```sql
DELETE FROM table_name
WHERE ;-- 筛选出指定行
```
### 删除所有行
这里只删除表中所有数据，而不删除表本身。
```sql
-- 方式一
DELETE FROM table_name

-- 方式二
TRUNCATE table_name
-- 该方法实际上是删除原表，并重新创建一个新表，而不是逐行删除
```

## 改
使用 `UPDATE` `SET` 关键字。
```sql
UPDATE table_name
SET field1 = 'value1',
    field2 = 'value2'
-- 添加 where 子句，可更新指定行；
-- 否则更新所有行
WHERE ;-- 删选条件 
```

## 查
使用 `SELETE` `FROM` 关键字。

对数据库进行查询应该是最经常使用的操作，而其中的语法和注意事项也是最繁多的。

**对于同样一种需求，可以使用多种不同的写法来达到目的。**

应当在能够达成任务的基础上，积极寻求更有效率的实现方式。

### 简单检索
```sql
-- 检索单列
SELECT field
FROM table_name;

-- 检索多列
SELECT field1, field2 --...
FROM table_name;

-- 检索所有列
SELECT * --通配符
FROM table_name;
```

### 结果筛选
**只检索出值不同的行**
```sql
-- 单列
SELECT DISTINCT field
FROM table_name;

-- 多列也适用
SELECT DISTINCT field1, field2 --...
FROM table_name;
```
`DISTINCT` 关键字应用于所有列，而不是在它之后的一个字段。

当有多列时，只有当两行的每个列都相同时才会被筛掉。

**检索出指定数量的行**
```sql
-- 检出前5行
SELECT DISTINCT field
FROM table_name
LIMIT 5 ;

-- 检出从第 4 行开始的 5行
SELECT DISTINCT field
FROM table_name
LIMIT 5， 4 -- 从 行 4 开始的 5 行
-- 另一种 更语义化的写法
LIMIT 5 OFFSET 4;

```
### 结果排序
使用 `order by` 子句指定排序字段，使用 `desc` 字段定义排序方式。
```sql
SELECT field_name
FROM table_name
ORDER BY field_name; -- 也可以是表中的其它字段

-- order by 默认升序排序，可改为降序
ORDER BY field_name DESC;

-- 多列排序
-- 当 field1 字段值相同时，再按 field2 排序
ORDER BY field1, field2, ...

-- 多列排序 + desc 关键字
-- desc 只作用位于其前的字段
ORDER BY field1 DESC, field2, field3 DESC, ...
```

### 结果过滤
使用 `where` 子句指定过滤条件。
```sql
SELECT field_name
FROM table_name
WHERE field1 = value1, -- 等于
      field1 <> value1, -- 不等于
      field1 != value1, -- 不相等
      field1 < value1, -- 小于
      field1 <= value1, -- 相等
      field1 BETWEEN value1 AND value2, -- 在指定两值之间
      field1 IS NULL　-- 空值
```
**and 、 or 关键字**

where 子句也可以用 and 和 or 关键字来组合使用。

```sql
SELECT field_name
FROM table_name
-- AND 关键字
WHERE field1 = value1 AND field2 <> value2;

-- OR 关键字
WHERE field1 = value1 OR field2 <> value2;

-- 组合使用
-- 计算次序中，and 优先级高于 or
WHERE field1 = value1 AND field2 <> value2 OR field3 IS NULL;
-- 避免歧义，可用 () 包裹
WHERE (field1 = value1 AND field2 <> value2) OR field3 IS NULL;

-- IN 关键字
WHERE field1 IN (v2, v3)
-- 等价于
WHERE field1 = v2 OR field1 = v3;

-- NOT 关键字，取反其后的条件
WHERE field1 NOT IN (v2, v3)
```
**LIKE + 通配符**
`_` 通配符匹配任何单个字符。
`%` 表示任何字符出现任意次数。
```sql
SELECT f1, f2
FROM table_name
WHERE f1 LIKE 'jet%';
-- 匹配 jet123、jet、Jet   、...
WHERE f1 LIKE 'jet_';
-- 匹配 jet1， jetc， 不会匹配 jet123.
```
**注意**：通配符的使用会降低搜索效率，如无必要，尽量少用。

mysql 也支持使用正则表达式来进行结果匹配。
```sql
SELECT f1, f2
FROM table_name
WHERE f1 REGEXP '[123]ton';
-- 匹配 1ton,2ton, 3ton
```

### 创建字段
`select` 语法不仅可以查询表中现有的字段列，还可以通过数据组合，返回基于现有字段数据，再生成的新字段数据，并通过别名方式`AS`生成新字段名。而这个新字段对于客户端来说，与直接请求的原生字段行为完全一致。

**计算字段**
```sql
SELECT field1 * field2 AS new_field
FROM table_name
```
如上方式，会返回一个 `new_field` 字段，是字段1和字段2 的值相乘的结果，它的值是 `v1*v2`。

使用计算字段还可以进行字符串拼接，这涉及到 mysql 中的函数使用，将在后面提到。

### 处理函数
mysql 支持使用函数来对原始数据进行处理后返回，主要包括`文本函数`，`数值函数`，`时间函数`，`系统函数`。

**文本函数**
```sql
-- 将文本转换为大写
SELECT 
    Upper(field) -- 将文本转换为大写
    Trim(field) -- 去除文本两边空格
    RTrim(field) -- 去除文本右边空格
    LTrim(field) -- 去除文本左边空格
    AS new_field
FROM table_name
```

**时间函数**

**数值函数**

**汇总函数**
对表中原始数据进行汇总，然后返回汇总值，而不必直接返回原始数据。
```sql
SELECT 
    COUNT(field) -- 对指定列中的行数进行汇总（忽略 NULL　值）
    AS new_field
FROM table_name
```
|函数名 | 功能 | 忽略 NULL|
|--- | --- | ---|
|**AVG(field)**|字段平均值|√|
|**COUNT(*)**|计算表中所有行数|×|
|**COUNT(field)**| 计算表中指定字段行数|√|
|**MAX(field)**|字段最大值|√|
|**MIN(field)**|字段最小值|√|
|**SUM(field)**|字段最小值|√|

### 数据分组
sql 允许对原始数据分组。通过将数据分成多个逻辑组，可以对每个组进行聚集计算。

通过 `GROUP BY` 子句构建分组。
```sql
-- 对 field 字段进行分组，然后对每个分组进行计数
-- 返回每个分组的行数。
SELECT COUNT(*) AS new_field
FROM table_name
GROUP BY field;
```
上例的意思是，对 `field` 字段进行分组，然后对每个分组进行计数，并返回每个分组的行数。

**过滤分组**
分组也可以进行过滤，其关键字 `HAVING` 类似 `WHERE` 语法，只不过 `WHERE` 指定过滤行，而 `HAVING`　指定过滤分组。

对于分组的过滤条件，通常使用聚集函数的结果来限定。
```sql
-- 对 field 字段进行分组，然后对每个分组进行计数
-- 返回行数大于 2 的分组的行数。
SELECT COUNT(*) AS new_field
FROM table_name
GROUP BY field
HAVING　COUNT(*) > 2
```
**分组排序**
为保证分组字段的输出顺序是正确的，一般应提供明确的 `ORDER BY` 子句。
```sql
-- 对 field 字段进行分组，然后对每个分组进行计数
-- 返回行数大于 2 的分组的行数
-- 返回值按照其行数进行升序排列
SELECT COUNT(*) AS new_field
FROM table_name
GROUP BY field
HAVING　COUNT(*) > 2
ORDER　BY　new_field
```

## 其他高级用法
MySQL 中，除了以上基础的增删改查，还有一些更加高级的用法。

比如，在更新语句中嵌套子查询；为多个相互关联的表创建联结；对多个表执行同一种查询，并返回查询结果集；对特定表创建索引，进行全文本模糊检索；将一些常用查询操作封装成视图，客户端直接向视图查询预处理后的原始数据；通过事务管理来实现分步的原子操作；对于用户权限的管理；操作性能的优化；数据库的日常维护等等。

本文不再进行详细梳理，更多请直接查看 `《MySQL 必知必会》`。
