document.addEventListener('DOMContentLoaded', function() {
    // 获取所有目录链接
    const links = document.querySelectorAll('.sidebar a');
    
    // 为每个链接添加点击事件
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认的跳转行为
            
            // 获取目标章节的ID
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // 使用scrollIntoView实现平滑滚动
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
// 监听页面滚动事件
window.addEventListener('scroll', function() {
    // 获取所有章节
    const sections = document.querySelectorAll('.section');
    
    // 遍历所有章节
    sections.forEach(section => {
        // 获取章节的位置信息
        const rect = section.getBoundingClientRect();
        // 获取章节对应的目录链接
        const link = document.querySelector(`.sidebar a[href="#${section.id}"]`);
        
        // 判断章节是否在视口中
        if (rect.top <= 150 && rect.bottom >= 150) {
            // 移除所有目录项的激活状态
            document.querySelectorAll('.sidebar a').forEach(a => {
                a.classList.remove('active');
            });
            // 为当前章节对应的目录项添加激活状态
            link.classList.add('active');
        }
    });
});
