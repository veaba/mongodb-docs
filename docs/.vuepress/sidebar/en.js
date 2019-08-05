/***********************
 * @name JS
 * @author Jo.gel
 * @date 2019/8/2 0002
 ***********************/
const {manualChildren, guidesChildren} = require('./sidebar_url');
module.exports = {
	'/en/manual': [
		{
			title: 'zhangsan',
			collapsable: false,
			children: manualChildren
		},
		{
			title: 'lisi',
			collapsable: false,
			children: guidesChildren
		},
	]
};
