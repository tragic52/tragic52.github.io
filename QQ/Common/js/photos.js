$(function() {
    // 获取相册ID
    const albumId = API.Utils.getUrlParam('albumId');
    // 获取指定相册数据
    const albumIndex = albums.getIndex(albumId, 'id');
    const album = albums[albumIndex];
    // 渲染导航相册名称
    $(".breadcrumb-item.active").text(album.name);
    // 获取模板元素
    const photos_tpl = document.getElementById('photos_tpl').innerHTML;
    // 生成模板
    const photos_html = template(photos_tpl, { photos: album.photoList || [] });
    // 渲染模板到页面
    $("#lightgallery").html(photos_html);

    // 图片懒加载
    lazyload();

    // 渲染画廊
    const gallery = $("#lightgallery").lightGallery({
        selector: '.lightbox',
        share: false,
        loop: true,
        download: false
    });

    // 自动加载画廊预览图
    API.Common.autoLoadPreview(gallery);

    // 查看赞
    $('.viewlikes').on('click', function() {
        API.Common.showLikeWin(this, album.photoList);
    });

    // 查看评论
    $('.viewcomments').on('click', function() {
        API.Common.showCommentsWin(this, album.photoList);
    });

});