/***********************
 * @name JS
 * @author Jo.gel
 * @date 2019/8/2 0002
 ***********************/
const {manualChildren, guidesChildren} = require('./sidebar_url');
module.exports = {
	'/manual': [
		{
			title: '安装',
			collapsable: false,
			children: manualChildren
		},
		{
			title: '李四',
			collapsable: false,
			children: guidesChildren
		},
	]
};
