/**
 * Created by sailengsi on 2017/4/30.
 */
import deme from '../../components/';

var {
	Home,
	Content,
	Modules
} = deme

export default [{
	path: '/demo',
	name: '真实交互',
	icon: 'inbox',
	component: Home,
	redirect: '/demo/user',
	children: [{
		path: 'course',
		name: '课程管理',
		icon: 'inbox',
		component: Content,
		redirect: '/demo/article/list',
		children: [{
			path: 'list',
			name: '课程列表',
			icon: 'reorder',
			component: Modules.Demo.Course.List
		}, {
			path: 'detail/:pid',
			name: 'detail',
			icon: 'reorder',
			component: Modules.Demo.Course.Detail
		}]
	}
	]
}];