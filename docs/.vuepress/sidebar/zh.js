/***********************
 * @name JS
 * @author Jo.gel
 * @date 2019/8/2 0002
 ***********************/
const {
	introductionLinks,
	installationLinks,
	theMongoShellLinks,
	mongoDBCRUDOperationsLinks,
	aggregationLinks,
	dataModelsLinks,
	transactionsLinks,
	indexesLinks,
	securityLinks,
	changeStreamsLinks,
	replicationLinks,
	shardingLinks,
	administrationLinks,
	storageLinks,
	frequentlyAskedQuestionsLinks,
	referenceLinks,
	releaseNotesLinks,
	technicalSupportLinks
} = require('./links');
module.exports = {
	'/manual/': [
		{
			title: '简介',
			collapsable: false,
			link:'/manual/',
			children: introductionLinks
		},
		{
			title: '安装',
			collapsable: false,
			children: installationLinks
		},
		{
			title: 'Mongo Shell',
			collapsable: false,
			children: theMongoShellLinks
		},
		{
			title: 'MongoDB CRUD 操作',
			collapsable: false,
			children: mongoDBCRUDOperationsLinks
		},
		{
			title: '聚合',
			collapsable: false,
			children: aggregationLinks
		},
		{
			title: '数据模型',
			collapsable: false,
			children: dataModelsLinks
		},
		{
			title: '事务',
			collapsable: false,
			children: transactionsLinks
		},
		{
			title: '索引',
			collapsable: false,
			children: indexesLinks
		},
		{
			title: '安全',
			collapsable: false,
			children: securityLinks
		},
		{
			title: '短线恢复',
			collapsable: false,
			children: changeStreamsLinks
		},
		{
			title: '副本集',
			collapsable: false,
			children: replicationLinks
		},
		{
			title: '切片',
			collapsable: false,
			children: shardingLinks
		}, {
			title: '管理员',
			collapsable: false,
			children: administrationLinks
		}, {
			title: '存储',
			collapsable: false,
			children: storageLinks
		}, {
			title: '常见问题',
			collapsable: false,
			children: frequentlyAskedQuestionsLinks
		}, {
			title: '参考',
			collapsable: false,
			children: referenceLinks
		}, {
			title: '发行说明',
			collapsable: false,
			children: releaseNotesLinks
		}, {
			title: '技术支持',
			collapsable: false,
			children: technicalSupportLinks
		}
	]
};
