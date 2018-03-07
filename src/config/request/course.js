/**
 * Created by sailengsi on 2017/4/30.
 */
/**
 * 文章管理
 * @type {Object}
 */
module.exports = [
	{
		name: '获取文章列表',
		method: 'selectCourse',
		path: '/Course/selectCourse',
		type: 'get',
	},
	{
		name: '查看文章详情',
		method: 'findCourse',
		path: '/Course/findCourse',
		type: 'post',
	},
	{
		name: '获取子课程',
		method: 'selectCCourse',
		path: '/Course/selectCCourse',
		type: 'get',
	},
	{
		name: '获取一级课程',
		method: 'selectPCourse',
		path: '/Course/selectPCourse',
		type: 'get',
	}
];