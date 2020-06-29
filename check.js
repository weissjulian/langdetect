function check() {
    var input = document.getElementById("textinput").value;
    css(input);
    html(input);
    jupyter(input);
    js(input);
    svg(input);
    julia(input);
    python(input);
}

function css(input) {
    var css = 0;
    let characteristic1 = new RegExp(":");
    let res1 = characteristic1.test(input);
    switch(res1) {
        case true:
            var css = css += 1;
            break;
        default:
            var css = css;
            break;
    };
    let characteristic2 = new RegExp("{");
    let res2 = characteristic2.test(input);
    switch(res2) {
        case true:
            var css = css += 1;
            break;
        default:
            var css = css;
            break;
    };
    let characteristic3 = new RegExp("}");
    let res3 = characteristic3.test(input);
    switch(res3) {
        case true:
            var css = css += 1;
            break;
        default:
            var css = css;
            break;
    };
    let characteristic4 = new RegExp("color:");
    let res4 = characteristic4.test(input);
    switch(res4) {
        case true:
            var css = css += 1;
            break;
        default:
            var css = css;
            break;
    };
    document.getElementById("cssv").innerHTML = css;
}
function html(input) {
    var html = 0;
    let characteristic1 = new RegExp("<!DOCTYPE html>");
    let res1 = characteristic1.test(input);
    switch(res1) {
        case true:
            var html = html += 1;
            break;
        default:
            var html = html;
            break;
    };
    let characteristic2 = new RegExp("<title>");
    let res2 = characteristic2.test(input);
    switch(res2) {
        case true:
            var html = html += 1;
            break;
        default:
            var html = html;
            break;
    };
    let characteristic3 = new RegExp("<head>");
    let res3 = characteristic3.test(input);
    switch(res3) {
        case true:
            var html = html += 1;
            break;
        default:
            var html = html;
            break;
    };
    document.getElementById("htmlv").innerHTML = html;
}
function jupyter(input) {
    var jupyter = 0;
    let characteristic1 = new RegExp("cell_type");
    let res1 = characteristic1.test(input);
    switch(res1) {
        case true:
            var jupyter = jupyter += 1;
            break;
        default:
            var jupyter = jupyter;
            break;
    };
    let characteristic2 = new RegExp("language_info");
    let res2 = characteristic2.test(input);
    switch(res2) {
        case true:
            var jupyter = jupyter += 1;
            break;
        default:
            var jupyter = jupyter;
            break;
    };
    let characteristic3 = new RegExp("file_extension");
    let res3 = characteristic3.test(input);
    switch(res3) {
        case true:
            var jupyter = jupyter += 1;
            break;
        default:
            var jupyter = jupyter;
            break;
    };
    let characteristic4 = new RegExp("{");
    let res4 = characteristic4.test(input);
    switch(res4) {
        case true:
            var jupyter = jupyter += 1;
            break;
        default:
            var jupyter = jupyter;
            break;
    };
    let characteristic5 = new RegExp("]");
    let res5 = characteristic5.test(input);
    switch(res5) {
        case true:
            var jupyter = jupyter += 1;
            break;
        default:
            var jupyter = jupyter;
            break;
    };
    document.getElementById("jupyterv").innerHTML = jupyter;
}
function js(input) {
    var js = 0;
    let characteristic1 = new RegExp("unction");
    let res1 = characteristic1.test(input);
    switch(res1) {
        case true:
            var js = js += 1;
            break;
        default:
            var js = js;
            break;
    };
    let characteristic2 = new RegExp(".");
    let res2 = characteristic2.test(input);
    switch(res2) {
        case true:
            var js = js += 1;
            break;
        default:
            var js = js;
            break;
    };
    let characteristic3 = new RegExp(";");
    let res3 = characteristic3.test(input);
    switch(res3) {
        case true:
            var js = js += 1;
            break;
        default:
            var js = js;
            break;
    };
    document.getElementById("jsv").innerHTML = js;
}
function svg(input) {
    var svg = 0;
    let characteristic1 = new RegExp("<g>");
    let res1 = characteristic1.test(input);
    switch(res1) {
        case true:
            var svg = svg += 1;
            break;
        default:
            var svg = svg;
            break;
    };
    let characteristic2 = new RegExp("http://www.w3.org/2000/svg");
    let res2 = characteristic2.test(input);
    switch(res2) {
        case true:
            var svg = svg += 1;
            break;
        default:
            var svg = svg;
            break;
    };
    let characteristic3 = new RegExp("<");
    let res3 = characteristic3.test(input);
    switch(res3) {
        case true:
            var svg = svg += 1;
            break;
        default:
            var svg = svg;
            break;
    };
    let characteristic4 = new RegExp("viewBox=");
    let res4 = characteristic4.test(input);
    switch(res4) {
        case true:
            var svg = svg += 1;
            break;
        default:
            var svg = svg;
            break;
    };
    let characteristic5 = new RegExp("<svg");
    let res5 = characteristic5.test(input);
    switch(res5) {
        case true:
            var svg = svg += 1;
            break;
        default:
            var svg = svg;
            break;
    };
    document.getElementById("svgv").innerHTML = svg;
}
function julia(input) {
    var julia = 0;
    let characteristic1 = new RegExp("println");
    let res1 = characteristic1.test(input);
    switch(res1) {
        case true:
            var julia = julia += 1;
            break;
        default:
            var julia = julia;
            break;
    };
    document.getElementById("juliav").innerHTML = julia;
}
function python(input) {
    var python = 0;
    let characteristic1 = new RegExp(":");
    let res1 = characteristic1.test(input);
    switch(res1) {
        case true:
            var python = python += 1;
            break;
        default:
            var python = python;
            break;
    };
    document.getElementById("pythonv").innerHTML = python;
}