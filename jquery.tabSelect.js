function Tab(opt, callback) {
    this.target = opt.target;
    this.textArr = opt.textArr;
    this.tabNum = opt.tabNum || opt.textArr.length;
    this.className = opt.className || "";
    this.callback = callback || null;
    this.tabWidth = opt.tabWidth ? opt.tabWidth + "px" : parseInt(100 / this.tabNum) + "%";
    this.target.append('<ul class ="tabList"></ul>');
    this.tabList = this.target.find('.tabList');
    this.sliderColor = opt.sliderColor ? opt.sliderColor : "#46CFB0";
    this.textColor = opt.textColor ? opt.textColor : "#fff";
    this.selectIndex = opt.selectIndex && opt.selectIndex < this.tabNum ? opt.selectIndex : 0;
    this.selectColor = opt.selectColor ? opt.selectColor : "red";
    this.unSelectColor = opt.unSelectColor ? opt.unSelectColor : this.selectColor;
    this.tabHeight = opt.tabHeight ? opt.tabHeight + "px" : this.target.get(0).offsetHeight + 'px';
    this.init();
}
var _proto = Tab.prototype;

_proto.init = function () {
    this.tabList.addClass(this.className);
    this.tabList.css({
        height: this.tabHeight
    });
    this.lineHeight = this.tabList.get(0).offsetHeight;
    for (var i = 0; i < this.tabNum + 1; i++) {
        if (i === this.tabNum) {
            this.tabList.append("<li class = 'slider tabSelectItem'></li>");
        } else {
            this.tabList.append("<li class = 'tabItem tabSelectItem'></li>");
            this.tabList.find(".tabItem").eq(i).html(this.textArr[i]);
        }
    }
    this.tabList.find("li").css({
        width: this.tabWidth
    });
    if (this.selectIndex >= 0) {
        this.tabList.find(".tabItem").eq(this.selectIndex).css({
            background: this.selectColor,
        }).siblings(".tabItem").css({
            background: this.unSelectColor
        });
        this.tabList.find(".slider").css({
            left: this.selectIndex * parseInt(this.tabWidth) + "px"
        });
    }
    this.tabList.find(".tabItem").css({
        lineHeight: this.tabHeight,
        color: this.textColor
    });
    this.tabList.find(".slider").css({
        background: this.sliderColor
    });
    this.clickTab(this.selectIndex, this.selectColor, this.unSelectColor, this.callback);
};


_proto.clickTab = function (selectIndex, selectColor, unSelectColor, callback) {
    var self = this;
    this.target.on('click', ".tabList .tabItem", function (e) {
        var whatTab = $(this).index();
        if (selectIndex >= 0) {
            $(this).css({
                background: selectColor,
            }).siblings(".tabItem").css({
                background: unSelectColor
            });
        }
        if (callback) {
            callback(whatTab); // 回调函数
        }
        var leftWidth = $(this).get(0).offsetWidth;
        var howFar = leftWidth * whatTab;
        $(".slider").css({
            left: howFar + "px"
        });
        $(".ripple").remove();
        var posX = $(this).offset().left,
            posY = $(this).offset().top,
            buttonWidth = $(this).width(),
            buttonHeight = $(this).height();
        $(this).prepend("<span class='ripple'></span>");
        if (buttonWidth >= buttonHeight) {
            buttonHeight = buttonWidth;
        } else {
            buttonWidth = buttonHeight;
        }
        var x = e.pageX - posX - buttonWidth / 2;
        var y = e.pageY - posY - buttonHeight / 2;
        $(".ripple").css({
            width: buttonWidth,
            height: buttonHeight,
            top: y + 'px',
            left: x + 'px'
        }).addClass("rippleEffect");
    });
};