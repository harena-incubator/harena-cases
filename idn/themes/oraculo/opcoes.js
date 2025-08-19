(function () { const localTheme = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="250"
   height="150"
   viewBox="0 0 500 300"
   version="1.1"
   id="svg1"
   inkscape:version="1.4 (86a8ad7, 2024-10-11)"
   sodipodi:docname="options.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     inkscape:zoom="0.51"
     inkscape:cx="1139.2157"
     inkscape:cy="561.76471"
     inkscape:window-width="1920"
     inkscape:window-height="1017"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs1">
    <rect
       x="150.98039"
       y="135.29412"
       width="360.78433"
       height="74.509809"
       id="rect3" />
  </defs>
  <g
     inkscape:label="Camada 1"
     inkscape:groupmode="layer"
     id="layer1">
    <rect
       style="fill:#ffccaa;stroke-width:0.865;stroke-dasharray:none"
       id="rect1"
       width="501.15195"
       height="299.86108"
       x="-1.0375817"
       y="0.5187906" />
    <rect
       style="fill:#ffb380;stroke:#000000;stroke-width:1;stroke-dasharray:none;stroke-opacity:1"
       id="option3"
       width="439.41583"
       height="29.571079"
       x="30.08987"
       y="163.41911" />
    <rect
       style="fill:#ffb380;stroke:#000000;stroke-width:1;stroke-dasharray:none;stroke-opacity:1"
       id="opcao2"
       width="439.41583"
       height="29.571079"
       x="30.299345"
       y="118.97108" />
   <foreignObject data-name="opcao2-text" x="30.299345" y="118.97108" width="439.41583" height="29.571079">
      <div id="opcao2-text" style="font-size:14px;font-family:Tahoma, Geneva, sans-serif;color:black;width:100%;height:100%;">
      </div>
   </foreignObject>
    <rect
       style="fill:#ffb380;stroke:#000000;stroke-width:1;stroke-dasharray:none;stroke-opacity:1"
       id="opcao1"
       width="439.41599"
       height="29.571079"
       x="30.88558"
       y="74.489952" />
   <foreignObject data-name="opcao1-text" x="30.88558" y="74.489952" width="439.41599" height="29.571079">
      <div id="opcao1-text" style="font-size:14px;font-family:Tahoma, Geneva, sans-serif;color:black;width:100%;height:100%;">
      </div>
   </foreignObject>
    <rect
       style="fill:#ffb380;stroke:#000000;stroke-width:1;stroke-dasharray:none;stroke-opacity:1"
       id="option4"
       width="439.41583"
       height="29.571079"
       x="29.894688"
       y="208.7634" />
    <text
       xml:space="preserve"
       transform="matrix(0.26458333,0,0,0.26458333,170.1634,4.6691177)"
       id="text3"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:64px;font-family:Arial;-inkscape-font-specification:Arial;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect3);shape-padding:0;fill:#170900;fill-opacity:1;stroke:#000000;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
         x="150.98047"
         y="192.9432"
         id="tspan1">Escolha:</tspan></text>

    <foreignObject data-name="text" x="350" y="680" width="815" height="80">
      <div id="text" class="cls-15" style="font-size:18px;font-family:Tahoma, Geneva, sans-serif;color:#2e2e2eff">
        <dcc-styler xstyle="out" distribution="generic" targeted="action">
          {knot}
        </dcc-styler>
      </div>
    </foreignObject>
  </g>
</svg>

`
MessageBus.i.publish("control/theme/opcoes/load/ready", localTheme)
})()