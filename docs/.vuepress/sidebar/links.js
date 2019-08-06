/***********************
 * @name JS
 * @author Jo.gel
 * @date 2019/8/2 0002
 * @link 所有link 必须是以一级级相对的/xx开头的绝对
 *    - 以.html作为结尾
 * @children [] 如果是字符串，则相对
 ***********************/
module.exports = {
	// introductionLinks: ['开始', '创建Atlas自由层集群','数据库和集合','文档','BSON 类型','比较/排序 顺序','MongoDB 拓展JSON'],
	// installationLinks: ['安装MongoDB社区版', '安装MongoDB企业版','MongoDB社区版升级到企业版','验证MongoDB包的完整性'],
	// theMongoShellLinks: ['配置Mongo Shell','Mongo Shell访问帮助','为Mongo shell 编写脚本','Mongo Shell的数据类型','Mongo shell 快速查阅'],
	introductionLinks: [
		'getting-started',
		'tutorial/atlas-free-tier-setup',
		'core/databases-and-collections',
		'core/views',
		'core/capped-collections',
		'core/document',
		'reference/bson-types',
		'reference/bson-type-comparison-order',
		'reference/mongodb-extended-json'
	],
	installationLinks: [
		{
			type: "group",
			title: "Install MongoDB Community Edition",
			link: "/manual/installation/install-community",
			children: [
				{
					type: "group",
					title: "Install on Linux",
					link: "/manual/administration/install-on-linux",
					children: [
						{
							title: "Install on Red Hat",
							type: 'group',
							link: "/manual/tutorial/install-mongodb-on-red-hat"
						},
						{
							type: "group",
							title: "Install on Ubuntu",
							link: "/manual/tutorial/install-mongodb-on-ubuntu.html",
							children: [
								'tutorial/install-mongodb-on-ubuntu-tarball',
								'reference/installation-ubuntu-community-troubleshooting'
							]
						},
						{
							type: "group",
							title: "Install on Debian",
							link: "/manual/tutorial/install-mongodb-on-debian.html"
						},
						{
							type: "group",
							title: "Install on SUSE",
							link: "/manual/tutorial/install-mongodb-on-suse.html"
						},
						{
							type: "group",
							title: "Install on Amazon",
							link: "/manual/tutorial/install-mongodb-on-amazon.html"
						}
					]
				},
				{
					type: "group",
					title: "Install on macOS",
					link: "/manual/tutorial/install-mongodb-on-os-x",
					children: [
						{
							type: "group",
							title: "Install using .tgz Tarball",
							link: "/manual/tutorial/install-mongodb-on-os-x-tarball"
						}
					]
				},
				{
					type: "group",
					title: "Install on Windows",
					link: "/manual/tutorial/install-mongodb-on-windows",
					children: [{
						type: "group",
						title: "Install using msiexec.exe",
						link: "/manual/tutorial/install-mongodb-on-windows-unattended"
					}]
				}
			]
		},
		// 企业版 MongoDB
		{
			type: "group",
			title: "Install Mongo Enterprise",
			link: "/manual/administration/install-enterprise.html",
			children: [
				{
					type: "group",
					title: "Install on Linux",
					link: "/manual/administration/install-enterprise-linux.html",
					children: [
						{
							type: "group",
							title: "Install on Red Hat",
							link: "/manual/tutorial/install-mongodb-enterprise-on-red-hat.html"
						},
						{
							type: "group",
							title: "Install on Ubuntu",
							link: "/manual/tutorial/install-mongodb-enterprise-on-ubuntu.html"
						},
						{
							type: "group",
							title: "Install on Debian",
							link: "/manual/tutorial/install-mongodb-enterprise-on-debian.html"
						},
						{
							type: "group",
							title: "Install on SUSE",
							link: "/manual/tutorial/install-mongodb-enterprise-on-suse.html"
						},
						{
							type: "group",
							title: "Install on Amazon",
							link: "/manual/tutorial/install-mongodb-enterprise-on-amazon.html"
						},
					
					]
				},
				{
					type: "group",
					title: "Install on macOS",
					link: "/manual/tutorial/install-mongodb-enterprise-on-os-x"
				},
				{
					type: "group",
					title: "Install on Windows",
					link: "/manual/tutorial/install-mongodb-enterprise-on-windows",
					children: [
						{
							type: "group",
							title: "Install using msiexec.exe",
							link: "/manual/tutorial/install-mongodb-enterprise-on-windows-unattended.html"
						}
					]
				},
				{
					type: "group",
					title: "Install on Docker",
					link: "/manual/tutorial/install-mongodb-enterprise-with-docker.html"
				},
			]
		},
		
		{
			type: "group",
			title: "Upgrade MongoDB Community to MongoDB Enterprise",
			link: "/manual/administration/upgrade-community-to-enterprise",
			children: [
				{
					type: "group",
					title: "Upgrade to MongoDB Enterprise (Standalone)",
					link: "/manual/tutorial/upgrade-to-enterprise-standalone",
				},
				{
					type: "group",
					title: "Upgrade to MongoDB Enterprise (Replica Set)",
					link: "/manual/tutorial/upgrade-to-enterprise-replica-set",
				},
				{
					type: "group",
					title: "Upgrade to MongoDB Enterprise (Sharded Cluster)",
					link: "/manual/tutorial/upgrade-to-enterprise-sharded-cluster",
				}
			]
		},
		'tutorial/verify-mongodb-packages'
	],
	theMongoShellLinks: [
		'tutorial/configure-mongo-shell',
		'tutorial/access-mongo-shell-help',
		'tutorial/write-scripts-for-the-mongo-shell',
		'core/shell-types',
		'reference/mongo-shell',
	],
	mongoDBCRUDOperationsLinks: [
		{
			type: "group",
			title: "Insert Documents",
			link: "/manual/tutorial/insert-documents",
			children: ['reference/insert-methods']
		},
		{
			type: "group",
			title: "Query Documents",
			link: "/manual/tutorial/query-documents",
			children: [
				'tutorial/query-embedded-documents',
				'tutorial/query-arrays',
				'tutorial/query-array-of-documents',
				'tutorial/project-fields-from-query-results',
				'tutorial/query-for-null-fields',
				'tutorial/iterate-a-cursor',
			]
		},
		{
			type: "group",
			title: "Update Documents",
			link: "/manual/tutorial/update-documents",
			children: ['reference/update-methods']
		},
		{
			type: "group",
			title: "Delete Documents",
			link: "/manual/tutorial/remove-documents",
			children: ['reference/delete-methods']
		},
		
		'core/bulk-write-operations',
		'core/retryable-writes',
		'reference/sql-comparison',
		{
			type: "group",
			title: "Text Search",
			link: "/manual/text-search",
			children: [
				'core/link-text-indexes',
				'core/text-search-operators',
				'tutorial/text-search-in-aggregation',
				'reference/text-search-languages',
			]
		},
		{
			type: "group",
			title: "Geospatial Queries",
			link: "/manual/geospatial-queries",
			children: [
				'tutorial/geospatial-tutorial',
				'reference/geojson',
			]
		},
		{
			type: "group",
			title: "Read Isolation(Read Concern)",
			link: "/manual/reference/read-concern",
			children: [
				'reference/read-concern-local',
				'reference/read-concern-available',
				'reference/read-concern-majority',
				'reference/read-concern-linearizable',
				'reference/read-concern-snapshot',
			]
		},
		'write-concern',
		{
			type: "group",
			title: "MongoDB CRUD Concepts",
			link: "/manual/core/crud",
			children: [
				'core/write-operations-atomicity',
				{
					type: "group",
					title: "MongoDB CRUD Concepts",
					link: "/manual/core/read-isolation-consistency-recency",
					children: [
						'core/causal-consistency-read-write-concerns',
					]
				},
				'core/distributed-queries',
				'tutorial/perform-findAndModify-linearizable-reads',
				'core/query-plans',
				{
					type: "group",
					title: "MongoDB CRUD Concepts",
					link: "/manual/core/query-optimization",
					children: [
						'tutorial/evaluate-operation-performance',
						'tutorial/optimize-query-performance-with-indexes-and-projections',
						'core/write-performance',
						'reference/explain-results',
					]
				},
				'tutorial/analyze-query-plan',
				'core/tailable-cursors'
			]
		},
	],
	aggregationLinks: [
		{
			type: "group",
			title: "Aggregation Pipeline Quick",
			link: "/manual/core/aggregation-pipeline",
			children: [
				'core/aggregation-pipeline-optimization',
				'core/aggregation-pipeline-limits',
				'core/aggregation-pipeline-sharded-collections',
				'tutorial/aggregation-zip-code-data-set',
				'tutorial/aggregation-with-user-preference-data',
			],
		},
		{
			type: "group",
			title: "Map-Reduce",
			link: "/manual/core/map-reduce",
			children: [
				'core/map-reduce-sharded-collections',
				'core/map-reduce-concurrency',
				'tutorial/map-reduce-examples',
				'tutorial/perform-incremental-map-reduce',
				'tutorial/troubleshoot-map-function',
				'tutorial/troubleshoot-reduce-function',
			]
		},
		{
			type: "group",
			title: "Aggregation Reference",
			link: "/manual/reference/aggregation",
			children: [
				'meta/aggregation-quick-reference',
				'reference/operator/aggregation/interface',
				'reference/aggregation-commands-comparison',
				'reference/aggregation-variables',
				'reference/sql-aggregation-comparison',
			]
		}
	],
	dataModelsLinks: [
		'core/data-modeling-introduction',
		'core/schema-validation',
		{
			type: "group",
			title: "Data Modeling Concepts",
			link: "/manual/core/data-models",
			children: [
				'core/data-model-design',
				'core/data-model-operations',
			]
		},
		{
			type: "group",
			title: "Data Model Examples and Patterns",
			link: "/manual/applications/data-models",
			children: [
				{
					type: "group",
					title: "Model Relationships Between Documents",
					link: "/manual/applications/data-models-relationships",
					children: [
						'tutorial/model-embedded-one-to-one-relationships-between-documents',
						'tutorial/model-embedded-one-to-many-relationships-between-documents',
						'tutorial/model-referenced-one-to-many-relationships-between-documents'
					]
				},
				{
					type: "group",
					title: "Model Tree Structures",
					link: "/manual/applications/data-models-tree-structures",
					children: [
						'tutorial/model-tree-structures-with-parent-references',
						'tutorial/model-tree-structures-with-child-references',
						'tutorial/model-tree-structures-with-ancestors-array',
						'tutorial/model-tree-structures-with-materialized-paths',
						'tutorial/model-tree-structures-with-nested-sets',
					]
				},
				{
					type: "group",
					title: "Model Specific Application Contexts",
					link: "/manual/applications/data-models-applications",
					children: [
						'tutorial/model-data-for-atomic-operations',
						'tutorial/model-data-for-keyword-search',
						'tutorial/model-monetary-data',
						'tutorial/model-time-data',
					]
				}
			]
		},
		{
			type: "group",
			title: "Data Model Reference",
			link: "/manual/reference/data-models",
			children: [
				'reference/database-references'
			]
		}
	],
	transactionsLinks: [
		'core/transactions-production-consideration',
		'core/transactions-operations'
	],
	indexesLinks: [
		'core/index-single',
		'core/index-compound',
		{
			type: "group",
			title: "Multikey Indexes",
			link: "/manual/core/index-multikey",
			children: [
				'core/multikey-index-bounds'
			]
		},
		{
			type: "group",
			title: "Text Indexes",
			link: "/manual/core/index-text",
			children: [
				'tutorial/specify-language-for-text-index',
				'tutorial/avoid-text-index-name-limit',
				'tutorial/control-results-of-text-search',
				'tutorial/limit-number-of-items-scanned-for-text-search'
			]
		},
		{
			type: "group",
			title: "2dsphere Indexes",
			link: "/manual/core/2dsphere",
			children: [
				'tutorial/query-a-2dsphere-index'
			]
		},
		{
			type: "group",
			title: "2d Indexes",
			link: "/manual/core/2d",
			children: [
				'tutorial/build-a-2d-index',
				'tutorial/query-a-2d-index',
				'core/geospatial-indexes',
				'tutorial/calculate-distances-using-spherical-geometry-with-2d-geospatial-indexes',
			]
		},
		{
			type: "group",
			title: "geoHaystack Indexes",
			link: "/manual/core/geohaystack",
			children: [
				'tutorial/build-a-geohaystack-index',
				'tutorial/query-a-geohaystack-index',
			]
		},
		'core/index-hashed',
		{
			type: "group",
			title: "Index Properties",
			link: "/manual/core/index-properties",
			children: [
				{
					type: "group",
					title: "TTL Indexes",
					link: "/manual/core/index-ttl",
					children: [
						'tutorial/expire-data'
					]
				},
				'core/index-unique',
				'core/index-partial',
				'core/index-case-insensitive',
				'core/index-sparse',
			]
		},
		{
			type: "group",
			title: "Index Build Operations on a Populated Collection",
			link: "/manual/core/index-creation",
			children: [
				'tutorial/build-indexes-on-replica-sets',
				'tutorial/build-indexes-on-sharded-clusters',
			]
		},
		
		'core/index-intersection',
		'tutorial/manage-indexes',
		'tutorial/measure-index-use',
		{
			type: "group",
			title: "Indexing Strategies",
			link: "/manual/applications/indexes",
			children: [
				'tutorial/create-indexes-to-support-queries',
				'tutorial/sort-results-with-indexes',
				'tutorial/ensure-indexes-fit-ram',
				'tutorial/create-queries-that-ensure-selectivity'
			]
		},
		'reference/indexes',
	],
	securityLinks: [
		'administration/security-checklist',
		'tutorial/enable-authentication',
		// 'core/authentication',
		// 'core/authorization',
		// 'core/security-transport-encryption',
		// 'core/security-encryption-at-rest',
		// 'core/auditing',
		// 'core/security-hardening',
		'tutorial/implement-field-level-redaction',
		// 'reference/security',
		'tutorial/create-a-vulnerability-report',
		// 'appendix/security',
	],
	changeStreamsLinks: [
		'administration/change-streams-production-recommendations',
		'reference/change-events',
	],
	replicationLinks: [
		// 'core/replica-set-members',
		'core/replica-set-primary',
		'core/replica-set-oplog',
		// 'core/replica-set-sync',
		// 'core/replica-set-architectures',
		// 'core/replica-set-high-availability',
		// 'applications/replication',
		// 'administration/replica-set-deployment',
		// 'administration/replica-set-member-configuration',
		// 'administration/replica-set-maintenance',
		// 'reference/replication',
	],
	shardingLinks: [
		// 'core/sharded-cluster-components',
		'core/sharding-shard-key',
		// 'core/hashed-sharding',
		// 'core/ranged-sharding',
		// 'core/zone-sharding',
		// 'core/sharding-data-partitioning',
		// 'core/sharding-balancer-administration',
		// 'administration/sharded-cluster-administration',
		// 'reference/sharding',
	],
	administrationLinks: [
		'administration/production-notes',
		'administration/production-checklist-operations',
		'administration/production-checklist-development',
		// 'administration/analyzing-mongodb-performance',
		// 'administration/configuration-and-maintenance',
		// 'data-center-awareness',
		// 'core/backups',
		// 'administration/monitoring',
	],
	storageLinks: [
		// 'core/storage-engines',
		// 'core/journaling',
		'core/gridfs',
		'faq/storage',
	],
	frequentlyAskedQuestionsLinks: [
		'faq/fundamentals',
		'faq/indexes',
		'faq/concurrency',
		'faq/sharding',
		'faq/replica-sets',
		'faq/storage',
		'faq/diagnostics',
	],
	referenceLinks: [
		// 'reference/operator',
		// 'reference/command',
		// 'reference/method',
		// 'reference/program',
		// 'reference/configuration-options',
		'reference/parameters',
		'reference/limits',
		'reference/explain-results',
		'reference/system-collections',
		'reference/connection-string',
		// 'reference/collation',
		'reference/mongodb-wire-protocol',
		'reference/log-messages',
		'reference/exit-codes',
		'reference/glossary',
		'reference/default-mongodb-port',
		'reference/server-sessions',
	],
	releaseNotesLinks: [
		{
			type: "group",
			title: "Release Notes for MongoDB 4.0",
			link: "/manual/release-notes/4.0",
			children: [
				'release-notes/4.0-compatibility',
				'release-notes/4.0-upgrade-standalone',
				'release-notes/4.0-upgrade-replica-set',
				'release-notes/4.0-upgrade-sharded-cluster',
				'release-notes/4.0-downgrade-standalone',
				'release-notes/4.0-downgrade-replica-set',
				'release-notes/4.0-downgrade-sharded-cluster',
				'release-notes/4.0-changelog',
			]
		},
		{
			type: "group",
			title: "Release Notes for MongoDB 3.6",
			link: "/manual/release-notes/3.6",
			children: [
				'release-notes/3.6-changelog',
				'release-notes/3.6-compatibility',
				'release-notes/3.6-upgrade-standalone',
				'release-notes/3.6-upgrade-replica-set',
				'release-notes/3.6-upgrade-sharded-cluster',
				'release-notes/3.6-downgrade-standalone',
				'release-notes/3.6-downgrade-replica-set',
				'release-notes/3.6-downgrade-sharded-cluster',
			]
		},
		
		{
			type: "group",
			title: "Release Notes for MongoDB 3.4",
			link: "/manual/release-notes/3.4",
			children: [
				'release-notes/3.4-changelog',
				'release-notes/3.4-compatibility',
				'release-notes/3.4-upgrade-standalone',
				'release-notes/3.4-upgrade-replica-set',
				'release-notes/3.4-upgrade-sharded-cluster',
				{
					type: "group",
					title: "Downgrade MongoDB 3.4 to 3.2",
					link: "/manual/release-notes/3.4-downgrade",
					children: [
						'release-notes/3.4-downgrade-standalone',
						'release-notes/3.4-downgrade-replica-set',
						'release-notes/3.4-downgrade-sharded-cluster',
					]
				}
			]
		},
		
		{
			type: "group",
			title: "Release Notes for MongoDB 3.2",
			link: "/manual/release-notes/3.2",
			children: [
				'release-notes/3.2-changelog',
				{
					type: "group",
					title: "Downgrade MongoDB 3.4 to 3.2",
					link: "/manual/release-notes/3.2-compatibility",
					children: [
						'release-notes/3.2-javascript'
					]
				},
				'release-notes/3.2-upgrade',
				'release-notes/3.2-downgrade'
			]
		},
		{
			type: "group",
			title: "Release Notes for MongoDB 3.0",
			link: "/manual/release-notes/3.0",
			children: [
				'release-notes/3.0-changelog',
				'release-notes/3.0-compatibility',
				'release-notes/3.0-upgrade',
				'release-notes/3.0-scram',
				'release-notes/3.0-downgrade',
			]
		},
		{
			type: "group",
			title: "Release Notes for MongoDB 2.6",
			link: "/manual/release-notes/2.6",
			children: [
				'release-notes/2.6-changelog',
				'release-notes/2.6-compatibility',
				'release-notes/2.6-upgrade',
				'release-notes/2.6-upgrade-authorization',
				'release-notes/2.6-downgrade'
			]
		},
		{
			type: "group",
			title: "Release Notes for MongoDB 2.4",
			link: "/manual/release-notes/2.4",
			children: [
				'release-notes/2.4-changelog',
				'release-notes/2.4-javascript',
				'release-notes/2.4-upgrade',
				'release-notes/2.4-index-types',
			]
		},
		'release-notes/2.2',
		'release-notes/2.0',
		'release-notes/1.8',
		'release-notes/1.6',
		'release-notes/1.4',
		'release-notes/1.2',
	],
	technicalSupportLinks: [
		'support'
	]
};
