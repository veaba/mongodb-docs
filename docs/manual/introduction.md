# MongoDB简介


``` iframe
- 文档数据库 
- 主要特性
```

欢迎使用MongoDB 4.0手册！MongoDB是一个为便于开发和扩展而设计的文档数据库。本手册介绍了MongoDB中的关键概念，介绍了查询语言，并提供了操作和管理方面的注意事项和过程，以及一个全面的参考部分。

MongoDB同时提供了*社区和企业版* 的数据库：

- MongoDB社区是[MongoDB的可用和免费使用](https://github.com/mongodb/mongo/)版本。
- MongoDB Enterprise是MongoDB Enterprise高级订阅的一部分，它包括对MongoDB部署的全面支持。MongoDB Enterprise还添加了以企业为中心的功能，如LDAP和Kerberos支持、磁盘加密和审计。


## 文档数据库
MongoDB中的记录是一个文档，它是由字段和值对组成的数据结构。MongoDB文档与JSON对象类似。字段值可以包括其他文档、数组和文档数组。

![document database](https://docs.mongodb.com/manual/tutorial/_images/crud-annotated-document.bakedsvg.svg)


使用文档的优点是：

- 文档（即对象）与许多编程语言中的本机数据类型相对应。
- 嵌入式文档和数组减少了对昂贵连接的需求。
- 动态模式支持流利的多态性。


## 主要特性

### 高性能
MongoDB提供高性能数据持久性，特别地：

- 对嵌入式数据模型的支持减少了数据库系统上的I/O活动。
- 索引支持更快的查询，并且可以包含来自嵌入文档和数组的键。

### 丰富的查询语言

MongoDB支持丰富的查询语言来支持读写操作（CRUD）以及：

- [数据聚合](https://docs.mongodb.com/manual/core/aggregation-pipeline/)
- [文本搜索](https://docs.mongodb.com/manual/text-search/)和[地理空间查询](https://docs.mongodb.com/manual/tutorial/geospatial-tutorial/)。

### 高可用性

MongoDB的复制功能（称为[副本集](https://docs.mongodb.com/manual/replication/)）提供以下功能：

- 自动故障转移
- 数据冗余

副本集是一组MongoDB服务器，它们维护相同的数据集，提供冗余并提高数据可用性。

### 水平伸缩性

MongoDB提供水平可伸缩性作为其核心功能的一部分：

- [切分](https://docs.mongodb.com/manual/sharding/#sharding-introduction)将数据分布在一组机器上。
- 从3.4开始，MongoDB支持基于[shard键](https://docs.mongodb.com/manual/reference/glossary/#term-shard-key)创建数据[区域](https://docs.mongodb.com/manual/core/zone-sharding/#zone-sharding)。在一个平衡的集群中，mongodb将一个区域覆盖的读写定向到该区域内的那些碎片。有关更多信息，请参阅[“区域手册”](https://docs.mongodb.com/manual/core/zone-sharding/#zone-sharding)页。

### 支持多个存储引擎

MongoDB支持[多个存储引擎](https://docs.mongodb.com/manual/core/storage-engines/)：

- [Wiredtiger存储引擎](https://docs.mongodb.com/manual/core/wiredtiger/)（包括对[静态加密](https://docs.mongodb.com/manual/core/security-encryption-at-rest/)的支持）
- [内存存储引擎](https://docs.mongodb.com/manual/core/inmemory/)
- [MMAPv1存储引擎](https://docs.mongodb.com/manual/core/mmapv1/)（MongoDB 4.0中已弃用）

此外，MongoDB还提供了可插拔的存储引擎API，允许第三方为MongoDB开发存储引擎。



