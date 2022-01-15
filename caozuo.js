var num = 0;
var btn = document.querySelector('.btn');
var ul = document.querySelector('ul');
var input = document.querySelector('.input');
// 添加li
btn.addEventListener('click', function() {
    num++;
    if (input.value == '') alert("请输入内容");
    else {
        var add = input.value + ' ' + "<a href='javascript:;' onclick='del(\"li" + num + "\")'>删除</a>" + ' ' + "<a href='javascript:;' onclick='gai(\"li" + num + "\")'>修改</a>"; // 点击触发删除、修改
        var li = document.createElement('li');
        li.innerHTML = add;
        li.id = ('li' + num)
        ul.appendChild(li);
        input.value = '';
    }
}, false); // 变为冒泡阶段

// 删除li
function del(id) {
    document.getElementById(id).remove()
}
//修改li
function gai(id) {
    document.getElementById(id).innerHTML = prompt("请输入要修改的内容~") + ' ' + "<a href='javascript:;' onclick='del(\"li" + num + "\")'>删除</a>" + ' ' + "<a href='javascript:;' onclick='gai(\"li" + num + "\")'>修改</a>";
}