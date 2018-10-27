function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  date = new Date(date);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const t1 = [year, month, day].map(formatNumber).join('/')
  // const t2 = [hour, minute, second].map(formatNumber).join(':')
  const t2 = [hour, minute].map(formatNumber).join(':')

  return `${t1} ${t2}`
}


export const calcTime = function ( time ) {
	// 计算天数
	time = Date.now() - time;
	console.log('calc time', time);
	const day = parseInt(time / 86400000);
	const hours = parseInt(time / 3600000);
	const minutes = parseInt(time / 60000);
	const seconds = parseInt(time / 1000);

	if (day) {
		return day + '天前';
	}

	if (hours) {
		return hours + '小时前';
	}

	if (minutes) {
		return minutes + '分钟前';
	}

	if (seconds) {
		return seconds + '秒前'
	};
}

export default {
  formatNumber,
  formatTime,
	calcTime
}
