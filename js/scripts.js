let shapesContainer = $("#shapeContainer");
let iterations = Math.floor(Math.random()*50) + 260, animationSpeed = 35;
let dir = ['-', ''], i;
let spin_dir = dir[Math.floor(Math.random()*2)], rotator = Math.random();
let widthOrHeight = { 0: ['width','vw'], 1: ['height', 'vh'] }
let r_1 = (150 + (Math.random()*105)), g_1 = (150 + (Math.random()*105)), b_1 = (150 + (Math.random()*105));
let r_2 = (150 + (Math.random()*105)), g_2 = (150 + (Math.random()*105)), b_2 = (150 + (Math.random()*105));
let aspect = $(window).width() > $(window).height() ? 0 : 1; 

let Shapes = {};

Shapes[1] = (index) => {
    return `<svg id="hexagon_${index+1}" class="" style="${widthOrHeight[aspect][0]}:${iterations - (index+1)}${widthOrHeight[aspect][1]}; transform: rotate(${spin_dir}${index*(1+rotator)}deg); color: rgba(${(r_1 - (index * (r_1/(iterations+0))))},${(g_1 - (index * (g_1/(iterations+0))))},${(b_1 - (index * (b_1/(iterations+0))))},1)" viewBox="0 0 1199.9996 1199.9996" height="1199.9996mm" width="1199.9996mm">
    <g transform="translate(323.03455,323.03455)" style="display:inline" id="layer2">
        <path id="hexagon" transform="scale(0.26458333)" d="M -1220.918,-1220.918 V 3314.5137 H 3314.5137 V -1220.918 Z M 771.60156,0.0078125 C 863.06186,-1.5791363 1775.3036,243.49691 1812.7012,280.89453 c 38.2951,38.29516 294.3568,993.93007 280.3398,1046.24217 -14.017,52.3122 -713.5921,751.8873 -765.9043,765.9043 C 1274.8246,2107.058 319.18969,1850.9963 280.89453,1812.7012 242.59937,1774.406 -13.462314,818.76919 0.5546875,766.45703 14.571689,714.14487 714.14487,14.571689 766.45703,0.5546875 c 1.22607,-0.32852346 2.94949,-0.50878823 5.14453,-0.546875 z"
        style="fill:currentColor;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke:rgba(${r_1},${g_1},${b_1},0.7);stroke-opacity:1" />
    </g>    
</svg>`;
}

Shapes[2] = (index) => {
    return `<svg id="hexagon_${index+1}" class="" style="${widthOrHeight[aspect][0]}:${iterations - (index+1)}${widthOrHeight[aspect][1]}; transform: rotate(${spin_dir}${index*(1+rotator)}deg); color: rgba(${(r_1 - (index * (r_1/(iterations+0))))},${(g_1 - (index * (g_1/(iterations+0))))},${(b_1 - (index * (b_1/(iterations+0))))},1)" viewBox="0 0 1199.9996 1199.9996" height="1199.9996mm" width="1199.9996mm">
    <g transform="translate(319.90129,623.72319)" style="display:inline" id="layer2">
        <path id="triangle" transform="matrix(0.26458333,0,0,0.26458333,-319.90129,-623.72319)"
        d="M 3.1074219,-4.9746094 V 4540.4062 H 4532.3242 V -4.9746094 Z M 2594.2715,1015.8555 c 2.1163,0.059 4.0586,0.3192 5.8203,0.7871 150.328,39.9216 689.6063,2034.7554 579.8691,2144.9824 -109.7371,110.227 -2106.9521,-420.1619 -2147.5429,-570.3105 -40.1152,-148.3892 1383.3801,-1580.45 1561.8535,-1575.459 z"
        style="fill:currentColor;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke:rgba(${r_1},${g_1},${b_1},0.7);stroke-opacity:1" />
    </g>    
</svg>`;
}

Shapes[3] = (index) => {
    return `<svg id="hexagon_${index+1}" class="" style="${widthOrHeight[aspect][0]}:${iterations - (index+1)}${widthOrHeight[aspect][1]}; transform: rotate(${spin_dir}${index*(1+rotator)}deg); color: rgba(${(r_1 - (index * (r_1/(iterations+0))))},${(g_1 - (index * (g_1/(iterations+0))))},${(b_1 - (index * (b_1/(iterations+0))))},1)" viewBox="0 0 1199.9996 1199.9996" height="1199.9996mm" width="1199.9996mm">
    <g transform="translate(319.90129,623.72319)" style="display:inline" id="layer2">
        <path id="square" transform="matrix(0.26458333,0,0,0.26458333,-319.90129,-623.72319)"
        d="M -3.1074219 -7.1484375 L -3.1074219 4542.5801 L 4538.5391 4542.5801 L 4538.5391 -7.1484375 L -3.1074219 -7.1484375 z M 1266.1406 1266.1406 L 3269.291 1266.1406 L 3269.291 3269.291 L 1266.1406 3269.291 L 1266.1406 1266.1406 z "
        style="fill:currentColor;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke:rgba(${r_1},${g_1},${b_1},0.7);stroke-opacity:1" />
    </g>    
</svg>`;
}

Shapes[4] = (index) => {
    return `<svg id="hexagon_${index+1}" class="" style="${widthOrHeight[aspect][0]}:${iterations - (index+1)}${widthOrHeight[aspect][1]}; transform: rotate(${spin_dir}${index*(1+rotator)}deg); color: rgba(${(r_1 - (index * (r_1/(iterations+0))))},${(g_1 - (index * (g_1/(iterations+0))))},${(b_1 - (index * (b_1/(iterations+0))))},1)" viewBox="0 0 1199.9996 1199.9996" height="1199.9996mm" width="1199.9996mm">
    <g transform="translate(319.90129,623.72319)" style="display:inline" id="layer2">
        <path id="pentagon" transform="matrix(0.26458333,0,0,0.26458333,-319.90129,-623.72319)"
        d="M 4.0410156 1.8671875 L 4.0410156 4543.5137 L 4537.6055 4543.5137 L 4537.6055 1.8671875 L 4.0410156 1.8671875 z M 1875.3516 1275.7695 C 2144.5686 1276.6693 2974.5968 1386.6174 3029.6699 1438.2305 C 3093.1777 1497.7482 3300.8665 2580.5796 3263.8867 2659.3711 C 3226.9069 2738.1626 2261.2532 3270.3005 2174.8906 3259.4785 C 2088.5281 3248.6566 1284.0319 2494.7045 1267.6367 2409.2246 C 1251.2415 2323.7448 1719.6882 1325.6384 1795.918 1283.6309 C 1806.0422 1278.0517 1834.1201 1275.6317 1875.3516 1275.7695 z "
        style="fill:currentColor;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke:rgba(${r_1},${g_1},${b_1},0.7);stroke-opacity:1" />
    </g>    
</svg>`;
}

Shapes[5] = (index) => {
    return `<svg id="hexagon_${index+1}" class="" style="${widthOrHeight[aspect][0]}:${iterations - (index+1)}${widthOrHeight[aspect][1]}; transform: rotate(${spin_dir}${index*(1+rotator)}deg); color: rgba(${(r_1 - (index * (r_1/(iterations+0))))},${(g_1 - (index * (g_1/(iterations+0))))},${(b_1 - (index * (b_1/(iterations+0))))},1)" viewBox="0 0 1199.9996 1199.9996" height="1199.9996mm" width="1199.9996mm">
    <g transform="translate(319.90129,623.72319)" style="display:inline" id="layer2">
        <path id="heptagon" transform="matrix(0.26458333,0,0,0.26458333,-319.90129,-623.72319)" d="M 4.0410156 -6.2148438 L 4.0410156 4551.5938 L 4537.6055 4551.5938 L 4537.6055 -6.2148438 L 4.0410156 -6.2148438 z M 2368.0371 1260.8926 C 2368.5974 1260.9066 2369.1175 1260.9375 2369.5977 1260.9844 C 2431.0525 1266.9843 3089.7671 1667.3388 3123.3926 1719.127 C 3157.0181 1770.9152 3254.7081 2535.5344 3235.1836 2594.1133 C 3215.6591 2652.6922 2678.7651 3205.804 2620.793 3227.0625 C 2562.8208 3248.321 1795.6328 3173.4196 1742.8672 3141.3496 C 1690.1016 3109.2796 1270.3274 2462.7667 1262.502 2401.5176 C 1254.6765 2340.2685 1498.4164 1608.9822 1541.4238 1564.6758 C 1584.0952 1520.7155 2296.8768 1259.117 2368.0371 1260.8926 z "
        style="fill:currentColor;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke:rgba(${r_1},${g_1},${b_1},0.7);stroke-opacity:1" />
    </g>    
</svg>`;
}

Shapes[6] = (index) => {
    return `<svg id="hexagon_${index+1}" class="" style="${widthOrHeight[aspect][0]}:${iterations - (index+1)}${widthOrHeight[aspect][1]}; transform: rotate(${spin_dir}${index*(1+rotator)}deg); color: rgba(${(r_1 - (index * (r_1/(iterations+0))))},${(g_1 - (index * (g_1/(iterations+0))))},${(b_1 - (index * (b_1/(iterations+0))))},1)" viewBox="0 0 1199.9996 1199.9996" height="1199.9996mm" width="1199.9996mm">
    <g transform="translate(319.90129,623.72319)" style="display:inline" id="layer2">
        <path id="ocatagon" transform="matrix(0.26458333,0,0,0.26458333,-319.90129,-623.72319)"
        d="M 4.0410156 -6.2148438 L 4.0410156 4551.5938 L 4537.6055 4551.5938 L 4537.6055 -6.2148438 L 4.0410156 -6.2148438 z M 2426.9824 1280.9082 C 2429.775 1280.8745 2432.0198 1280.9891 2433.6797 1281.2617 C 2486.7961 1289.9869 3055.636 1643.0721 3087.0254 1686.8008 C 3118.4148 1730.5294 3270.9771 2382.4304 3262.252 2435.5469 C 3253.5268 2488.6633 2900.4396 3057.5032 2856.7109 3088.8926 C 2812.9823 3120.2819 2161.0833 3272.8443 2107.9668 3264.1191 C 2054.8503 3255.394 1486.0085 2902.3068 1454.6191 2858.5781 C 1423.2298 2814.8495 1270.6694 2162.9485 1279.3945 2109.832 C 1288.1197 2056.7156 1641.205 1487.8757 1684.9336 1456.4863 C 1727.2957 1426.0779 2340.4132 1281.9538 2426.9824 1280.9082 z "
        style="fill:currentColor;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke:rgba(${r_1},${g_1},${b_1},0.7);stroke-opacity:1" />
    </g>    
</svg>`;
}

const buildTunnel = () => {
    let chooser = Math.floor(Math.random()*6) + 1;
    for (let i = 0; i < iterations; i++) {
        // setTimeout(function() {
            shapesContainer.prepend(Shapes[chooser](i));
            shapesContainer.css('background',`rgba(${(r_1 - (iterations * (r_1/(iterations+0))))}, ${(r_1 - (iterations * (r_1/(iterations+0))))}, ${(b_1 - (iterations * (b_1/(iterations+0))))}, 1)`)
        // }, i * animationSpeed);
    }
}

buildTunnel();

$(document).on('click', function() {
    location.reload(true);
});

$(document).ready(function(){
    let shapes = $('svg');
    shapes.each((index, value) => {
        // setTimeout(() => {
            $(value).removeClass('hide-me');
        // }, index  * 20);
    });
});
