
<!DOCTYPE html>
<html>
<head>
    <title> new document </title>
    <meta http-equiv="Content-Type" content="text/html; charset=gbk"/>
    <script type="text/javascript">

        window.onload = function() {
            var tr = document.getElementsByTagName("tr");
            for (var i = 0; i < tr.length; i++) {
                bgcChange(tr[i]);
            }
            // 鼠标移动改变背景,可以通过给每行绑定鼠标移上事件和鼠标移除事件来改变所在行背景色。
        }
        function bgcChange(obj) {
            obj.onmouseover = function() {
                obj.style.backgroundColor = "#f2f2f2";
            }
            obj.onmouseout = function() {
                obj.style.backgroundColor = "#fff";
            }
        }
        // 编写一个函数，供添加按钮调用，动态在表格的最后一行添加子节点；
        var num=2;
        function add() {
            num++;
            var tr = document.createElement("tr");
            var xH = document.createElement("td");
            var xM = document.createElement("td");
            var del = document.createElement("td");
            xH.innerHTML = "xh00" +num;
            xM.innerHTML = "新同学" +num;
            del.innerHTML ="<input type='button' value='删除' onclick='remove(this)'/>"
            //"<input type='button',onclick='remove(this)'>删除</input>";
            //<a href='javascript:;' onclick='remove(this)' >删除</a>

            var tab=document.getElementById("table");
            tab.appendChild(tr);
            tr.appendChild(xH);
            tr.appendChild(xM);
            tr.appendChild(del);

            var trNew=document.getElementsByTagName("tr");
//        document.write(trNew.length);
            for(var i=0;i<trNew.length;i++){
                bgcChange(trNew[i]);
            }

        }
        // 创建删除函数
        function remove(obj){
            var tr=obj.parentNode.parentNode;
            tr.parentNode.removeChild(tr);

        }


    </script>
</head>
<body>
<table border="1" width="50%" id="table">
    <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>操作</th>
    </tr>

    <tr>
        <td>xh001</td>
        <td>王小明</td>
        <td><input type="button" value="删除" onclick="remove(this)"/></td>   <!--在删除按钮上添加点击事件  -->

    </tr>

    <tr>
        <td>xh002</td>
        <td>刘小芳</td>
        <td><input type="button" value="删除" onclick="remove(this)"/></td>   <!--在删除按钮上添加点击事件  -->
    </tr>

</table>
<input type="button" value="添加一行" onclick="add()" />   <!--在添加按钮上添加点击事件  -->
</body>
</html>
