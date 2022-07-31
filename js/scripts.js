let shapesContainer = $("#shapeContainer");
let iterations = 250;
let r = 50, g = 200, b = 200;

// rgba(${Math.floor(r - (i * (r/iterations)))},${Math.floor(g - (i * (g/iterations)))},${Math.floor(b - (i * (b/iterations)))},1)
const buildTunnel = () => {
    for (let i = 0; i < iterations; i++) {
            shapesContainer.prepend(`
                <svg id="hexagon_${i+1}" class="" style="width:${260 - (i+1)}vw; transform: rotate(-${i*1}deg); color: rgba(${Math.floor(r - (i * (r/iterations)))},${Math.floor(g - (i * (g/iterations)))},${Math.floor(b - (i * (b/iterations)))},1)" viewBox="0 0 1199.9996 1199.9996" height="1199.9996mm" width="1199.9996mm">
                    <g transform="translate(323.03455,323.03455)" style="display:inline" id="layer2">
                        <path id="rect4774" transform="scale(0.26458333)" d="M -1220.918,-1220.918 V 3314.5137 H 3314.5137 V -1220.918 Z M 771.60156,0.0078125 C 863.06186,-1.5791363 1775.3036,243.49691 1812.7012,280.89453 c 38.2951,38.29516 294.3568,993.93007 280.3398,1046.24217 -14.017,52.3122 -713.5921,751.8873 -765.9043,765.9043 C 1274.8246,2107.058 319.18969,1850.9963 280.89453,1812.7012 242.59937,1774.406 -13.462314,818.76919 0.5546875,766.45703 14.571689,714.14487 714.14487,14.571689 766.45703,0.5546875 c 1.22607,-0.32852346 2.94949,-0.50878823 5.14453,-0.546875 z"
                        style="fill:currentColor;stroke-width:0.75;stroke-miterlimit:4;stroke-dasharray:none;stroke:rgba(0,0,0,0.15);stroke-opacity:1" />
                    </g>    
                </svg>
            `);
    }
}

const shiftColor = () => {
    setInterval(function() {
        r  = (150 + Math.floor(Math.random()*105)), g = (150 + Math.floor(Math.random()*105)), b = (150 + Math.floor(Math.random()*105));
        $('svg').each(function(index) {
            setTimeout(function(){
                $(`#hexagon_${iterations - index}`).css(`color`, `rgba(${Math.floor((index * (r/iterations)))},${Math.floor((index * (g/iterations)))},${Math.floor((index * (b/iterations)))},1)`).removeClass('hide-me');
            }, 100 * index);
        });
    }, 1000);
}

const reveal = () => {
    $("#shade").delay(500).fadeOut(2500);
}

reveal();
buildTunnel();
shiftColor();
