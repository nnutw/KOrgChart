/*!build time : 2013-09-28 9:06:30 PM*/
KISSY.add("gallery/KOrgChart/1.0/index",function(){!function(a){var b=!1;a.fn.jOrgChart=function(c,d){b=navigator.appVersion.indexOf("MSIE 7.")>-1||"undefined"==typeof document.body.style.maxHeight;var e=a.fn.jOrgChart,f=a.extend({},e.defaults,c),g=a(this),h=e.util.init(g,f).refresh();f.dragAndDrop&&d.call(g,h)},a.fn.jOrgChart.defaults={nodeData:[],chartElement:"body",depth:-1,chartClass:"jOrgChart",dragAndDrop:!1,onSelected:null,preventDefault:!1},a.fn.jOrgChart.util={_chart:null,_nodeCount:0,_Instance:null,init:function(a,b){var c=this;return c._chart=a,c._Instance={nodeCount:c._nodeCount,option:b,chart:c._chart,buildNode:c.buildNode,refresh:c.refresh,drawLine:c.drawLine}},buildNode:function(c,d,e,f){for(var g=this,h=0,i=c.length;i>h;h++){var j,k=c[h],l=a("<table cellpadding='0' cellspacing='0' border='0'/>"),m=a("<tbody/>"),n=a("<tr/>").addClass("node-cells"),o=a("<td/>").addClass("node-cell").attr("colspan",2),p=k.nodes||[];p.length>1&&o.attr("colspan",2*p.length);var q=k.nodeContent,r=g.nodeCount;if(g.nodeCount++,j=a("<div>").addClass("node").data("tree-node",k).append(q),j.cache&&j.cache("tree-node",k),k.id=r,p.length>0&&j.on("click",function(c){var d=a(this);if(!g.option.preventDefault){var e=a(d.closest("tr"));k.collapsed===!0?(k.collapsed=!1,b?g.refresh():g.refresh(k),d.css("cursor","n-resize"),e.nextAll("tr").each(function(){a(this).css("visibility","")})):(k.collapsed=!0,b?g.refresh():g.refresh(k),d.css("cursor","s-resize"),e.nextAll("tr").each(function(){a(this).css("visibility","hidden")}))}a.isFunction(g.option.onselect)&&g.option.onselect.call(d,c,k)}),o.append(j),n.append(o),m.append(n),p.length>0){if(j.css("cursor","n-resize"),-1==f.depth||e+1<f.depth){var s=k.collapsed!==!0;s&&g.drawLine(m,p);var t=a("<tr/>");a(p).each(function(){var b=a("<td class='node-container'/>");b.attr("colspan",2);try{var c=a(this)[0];c.parentNode=k,s&&g.buildNode(a(this),b,e+1,f)}catch(d){alert(d)}t.append(b)})}m.append(t)}l.append(m),d.append(l),k.nodeEle=n,k.addNode=a.fn.jOrgChart.util.addNode,k.remove=a.fn.jOrgChart.util.remove,k.clientFn&&a.isFunction(k.clientFn)&&k.clientFn.call(g,k),k.eleStyle&&(j[0].style.cssText=k.eleStyle),j.children("a").on("click",function(a){a.stopPropagation()})}},refresh:function(b){var c=this,d=c.option,e="body",f="body";return b?(e=a(b.nodeEle.parent("tbody")),f=a("<tr/>"),e.children().remove(),c.buildNode([b],f,0,d),e.append(f)):(c.chart.children().remove(),e=a(d.chartElement),f=a("<div class='"+d.chartClass+"'/>"),c.buildNode(d.nodeData,f,0,d),e.append(f)),c},addNode:function(c){var d=this;d.nodes.push(c);var e=a.fn.jOrgChart.util._Instance;b?e.refresh():e.refresh(d)},remove:function(){for(var c=this,d=c.id,e=c.parentNode,f=0,g=e.nodes.length;g>f;f++){var h=e.nodes[f];if(h&&h.id==d){e.nodes.splice(f,1);break}}var i=a.fn.jOrgChart.util._Instance;b?i.refresh():i.refresh(c.parentNode||{})},drawLine:function(b,c){var d=a("<tr/>"),e=a("<td/>").attr("colspan",2*c.length);d.append(e);var f=a("<div></div>").addClass("line down");e.append(f),b.append(d);var g=a("<tr/>");a(c).each(function(){var b=a("<td>&nbsp;</td>").addClass("line left top"),c=a("<td>&nbsp;</td>").addClass("line right top");g.append(b).append(c)}),g.find("td:first").removeClass("top"),g.is("tr")?g.find("td:last").removeClass("top"):a(g.parent()).find("td:last").removeClass("top"),g=g.is("tr")?g:a(g.parent()),b.append(g)}}}(jQuery)},{requires:["./KAdapter"]});