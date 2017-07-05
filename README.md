# jquery-tabSelect
简易的jquery tab选项卡组件
## api配置

<table class="table table-bordered table-striped table-condensed">

<thead>
    <tr>
        <th>api</th>    
        <th>默认值</th>
        <th>api介绍</th>
        <th>示例</th>
    </tr>
</thead>

<tbody>
    <tr>
        <td>target</td>
        <td>null</td>
        <td>JQeury选择器 外部容器(必须配置)</td>
        <td>$("#box")</td>
    </tr>
    <tr>
        <td>textArr</td>
        <td>null</td>
        <td>数组 对应每个选项卡的文字(必要配置)</td>
        <td>['选项卡1','选项卡2','选项卡3']</td>
    </tr>
    <tr>
        <td>tabNum</td>
        <td>textArr的长度</td>
        <td>选项卡的数目 number(非必要配置)</td>
        <td>2</td>
    </tr>
    <tr>
        <td>tabWidth</td>
        <td>根据数目自动填充满父元素</td>
        <td>选项卡的宽度 number(非必要配置)</td>
        <td>120</td>
    </tr>
    <tr>
        <td>tabHeight</td>
        <td>父元素100%</td>
        <td>选项卡的高度 number(非必要配置)</td>
        <td>120</td>
    </tr>
    <tr>
        <td>sliderColor</td>
        <td>'#46CFB0'</td>
        <td>滑动条的颜色 string 颜色值(非必要配置)</td>
        <td>'red' 'rgba()' '#46CFB0'</td>
    </tr>
    <tr>
        <td>selectIndex</td>
        <td>0</td>
        <td>选中的第几个，超出长度会选中最后一个 number(非必要配置)</td>
        <td>0</td>
    </tr>
    <tr>
        <td>selectColor</td>
        <td>'red'</td>
        <td>选中选项卡的颜色 string(非必要配置)</td>
        <td>'red' 'rgba()' '#46CFB0'</td>
    </tr>
    <tr>
        <td>unSelectColor</td>
        <td>与selectColor相同</td>
        <td>未选中选项卡的颜色 string(非必要配置)</td>
        <td>'red' 'rgba()' '#46CFB0'</td>
    </tr>
    <tr>
        <td>textColor</td>
        <td>'#fff'</td>
        <td>字体颜色 string(非必要配置)</td>
        <td>'red' 'rgba()' '#46CFB0'</td>
    </tr>
    <tr>
        <td>callback</td>
        <td>null</td>
        <td>返回函数 function(非必要配置)</td>
        <td>查看示例代码</td>
    </tr>
</tbody>
</table>
```
new Tab({
    target:$("#box"),
    textArr :["选项1","选项2","选项3"],
    tabNum:3,  
    tabWidth:120,
    tabHeight:40,
    sliderColor:"#eee",
    selectIndex: 5,   
    selectColor:"#ccc",
    unSelectColor:"blue",
    textColor:"red"
},function(index){
    console.log(index); //点击后的回调 返回值为当前点击的index值
});
```
