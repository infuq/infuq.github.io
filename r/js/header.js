document.write("<nav>");
document.write("    <input type=\"checkbox\" id=\"check\">");
document.write("    <label for=\"check\" class=\"checkbtn\">");
document.write("        <i class=\"fa fa-bars\" aria-hidden=\"true\"><\/i>");
document.write("    <\/label>");
document.write("");
document.write("    <label class=\"logo\">Infuq<\/label>");
document.write("    <ul>");
document.write("        <li class=\"mobileMenu\">");
document.write("            <a href=\"javascript:void(0)\" onclick=\"closeMenu()\">");
document.write("                <svg t=\"1597600547241\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" p-id=\"2704\" width=\"32\" height=\"32\"><path d=\"M216.91904 188.61056l648.2176 648.25856M198.81472 206.71488L740.9664 748.9024l106.06592 106.07104c23.36768 23.36768 59.5712-12.83584 36.20864-36.1984L341.08928 276.5824 235.02336 170.50624c-23.36768-23.36256-59.5712 12.84096-36.20864 36.20864z\" p-id=\"2705\"><\/path><path d=\"M865.13664 188.61056L216.91904 836.86912M847.03232 170.50624C666.32192 351.232 485.59616 531.95776 304.88064 712.69376l-106.06592 106.07616c-23.36256 23.36256 12.84096 59.5712 36.20352 36.1984L777.16992 312.7808l106.07104-106.07104c23.35744-23.36256-12.84096-59.56608-36.20864-36.20352z\" p-id=\"2706\"><\/path><\/svg>");
document.write("            <\/a>");
document.write("        <\/li>");
document.write("        <li><a href=\"\/index.html\">首页<\/a><\/li>");
document.write("        <li><a href=\"\">数据结构与算法<\/a><\/li>");
document.write("        <li><a href=\"#\">设计模式<\/a><\/li>");
document.write("        <li><a href=\"#\">网络与IO<\/a><\/li>");
document.write("        <li><a href=\"#\">数据库<\/a><\/li>");
document.write("        <li><a href=\"\/about.html\">关于<\/a><\/li>");
document.write("    <\/ul>");
document.write("<\/nav>");



document.write("\
<script>\
    function closeMenu(obj) {       \
        document.getElementById('check').checked=false;\
    }\
</script>\
");
