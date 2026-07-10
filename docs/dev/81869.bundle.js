"use strict";(self.webpackChunkhurricane_aware=self.webpackChunkhurricane_aware||[]).push([[81869],{31566(e,t,r){r.d(t,{F:()=>u,a:()=>p,b:()=>f});var i=r(39369),o=r(28019),a=r(19635),s=r(62462),n=r(88531),l=r(19778),c=r(13439),d=r(43398);class u extends c.Y{constructor(){super(...arguments),this.effect=0,this.fadeFactor=(0,i.v)(1)}}function f(){const e=new d.N5;return e.include(o.c),e.outputs.add("fragColor","vec4",0),e.fragment.uniforms.add(new l.N("colorTexture",e=>e.color),new l.N("focusArea",e=>e.focusArea),new n.c("focusAreaEffectMode",e=>e.effect),new a.m("fadeFactor",e=>e.fadeFactor.value)).main.add(s.H`
      float mask = texture( focusArea, uv, 0.0 ).r;
      vec4 color = texture( colorTexture, uv, 0.0 );
      vec4 colorDeSaturate = vec4(color.r * 0.25 + color.g * 0.5 + color.b * 0.25);
      if (focusAreaEffectMode == ${s.H.int(0)}) {
        fragColor = mask > 0.0 ? color : mix(color, 0.55 * colorDeSaturate + 0.45, fadeFactor);
      } else {
        fragColor = mask > 0.0 ? color : mix(color, 0.33 * color, fadeFactor);
      }
  `),e}const p=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaColorPassParameters:u,build:f},Symbol.toStringTag,{value:"Module"}))},32052(e,t,r){r.d(t,{H:()=>U,a:()=>D,b:()=>F});var i=r(53334),o=r(56560),a=r(76982),s=r(77788),n=r(46996),l=r(38587),c=r(65895),d=r(87331),u=r(20524),f=r(16937),p=r(9717),h=r(24578),v=r(83660),x=r(15510),g=r(21586),m=r(66579),C=r(70751),O=r(92121),S=r(19635),w=r(62462),z=r(88531),b=r(96384),y=r(19778),P=r(34193),A=r(92703),V=r(82315),_=r(43398);function F(e){const t=new _.N5;t.include(d.Q,e),t.vertex.include(n.N,e);const{output:r,hasOcclusionTexture:o,signedDistanceFieldEnabled:F,pixelSnappingEnabled:U,hasEmission:T,hasScreenSizePerspective:I,debugDrawLabelBorder:M,hasVVSize:j,hasVVColor:L,hasRotation:B,occludedFragmentFade:W,sampleSignedDistanceFieldTexelCenter:G,hasVertexColor:N,hasVertexSize:$,hasVertexRotation:q,hasVertexUVi:Z}=e;t.include(x.Y6),t.include(h.A,e),t.include(l.g,e),t.include(V.D,e);const{vertex:k,fragment:Y}=t;Y.include(v.a),Y.code.add(w.H`
    vec4 applyFocusAreaStyle(vec4 color, int style) {
      const float factor = 0.46;
      const float factorBright = 0.32;

      if (style == ${w.H.int(0)}) {
        float luma = (color.r + color.g + color.b) / 3.0;
        float bright = luma * (1.0 - 0.6 * factorBright) + 0.6 * factorBright * color.a;
        float brightScaled = bright * factorBright;
        return vec4(brightScaled, brightScaled, brightScaled, color.a * factorBright);
      }

      float darkScaled = factor * factor;
      return vec4(color.rgb * darkScaled, color.a * factor);
    }
  `),t.varyings.add("vcolor","vec4"),t.varyings.add("vtc","vec2"),t.varyings.add("vsize","vec2");const Q=10===r;k.uniforms.add(new C.I("viewport",e=>e.camera.fullViewport),new m.G("screenOffset",(e,t)=>(0,i.hZ)(H,2*e.screenOffset[0]*t.camera.pixelRatio,2*e.screenOffset[1]*t.camera.pixelRatio)),new m.G("anchorPosition",e=>D(e)),new O.E("materialColor",({color:e})=>e),new S.m("materialRotation",e=>e.rotation),new m.G("materialSize",e=>e.size),new y.N("tex",e=>e.texture)),(0,g.Nz)(k),F&&(k.uniforms.add(new O.E("outlineColor",e=>e.outlineColor)),Y.uniforms.add(new O.E("outlineColor",e=>E(e)?e.outlineColor:a.uY),new S.m("outlineSize",e=>E(e)?e.outlineSize:0))),U&&k.include(c.K),I&&((0,x.pM)(k),(0,x.OH)(k)),M&&t.varyings.add("debugBorderCoords","vec4"),t.attributes.add("uv0","vec2"),Z&&t.attributes.add("uvi","vec4"),N&&t.attributes.add("color","vec4"),$&&t.attributes.add("size","vec2"),q&&t.attributes.add("rotation","float"),(j||L)&&t.attributes.add("featureAttribute","vec4"),k.main.add(w.H`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${p.Z};
      return;
    }

    vec2 vertexSize = materialSize${(0,w.If)($," * size")};
    vec2 inputSize;
    ${(0,w.If)(I,w.H`
        inputSize = screenSizePerspectiveScaleVec2(vertexSize, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,w.H`
        inputSize = vertexSize;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${(0,w.If)(j,w.H`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);
  `);const X=w.H`
  ${(0,w.If)(Z,w.H`
    vec2 texSize = vec2(textureSize(tex, 0));
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0)) / texSize;
    `,w.H`
    vec2 uv = mix(vec2(0.), vec2(1.), bvec2(uv0));
    `)}

    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${(0,w.If)(B,w.H`
        float angle = radians(materialRotation${(0,w.If)(q," + rotation")});
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,K=U?F?w.H`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:w.H`posProj += quadOffset;
if (inputSize.x == vertexSize.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:w.H`posProj += quadOffset;`;k.include(A.Q),k.main.add(w.H`
    ${X}
    ${L?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":N?"vcolor = color * materialColor;":"vcolor = materialColor;"}

    ${(0,w.If)(11===r,w.H`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < alphaCutoff;
    ${(0,w.If)(F,"alphaDiscard = alphaDiscard && outlineColor.a < alphaCutoff;")}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${K}
      gl_Position = posProj;
    }

    vtc = uv;

    ${(0,w.If)(M,w.H`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `);const J=(0,s._o)(r)&&e.hasFocusAreaStyle&&!e.draped;switch(Y.uniforms.add(new y.N("tex",e=>e.texture)),J&&Y.uniforms.add(new z.c("focusAreaStyle",e=>(e=>e?P.i[e]:0)(e.focusAreaStyle))),W&&!Q&&(Y.include(f.E),Y.uniforms.add(new b.x("depthMap",e=>e.mainDepth),new S.m("occludedOpacity",e=>e.occludedFragmentOpacity?.value??1))),o&&Y.uniforms.add(new b.x("texOcclusion",e=>e.hudOcclusion?.attachment)),M?Y.main.add("\n        float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));\n        // don't discard fragments on debug border\n        float textureAlphaCutoff = isBorder > 0.0 ? 0.0 : alphaCutoff;\n      "):Y.main.add("float textureAlphaCutoff = alphaCutoff;"),Y.main.add("vec2 samplePos = vtc;"),G&&Y.main.add(w.H`float txSize = float(textureSize(tex, 0).x);
float texelSize = 1.0 / txSize;
vec2 scaleFactor = (vsize - txSize) * texelSize;
samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`),F?Y.main.add(w.H`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < textureAlphaCutoff ||
          fillPixelColor.a + outlinePixelColor.a < alphaCutoff
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${(0,w.If)(!Q,w.H`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < textureAlphaCutoff) {
          discard;
        }

        ${(0,w.If)(!Q,w.H`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `):Y.main.add(w.H`
        vec4 texColor = texture(tex, samplePos, -0.5);
        if (texColor.a < textureAlphaCutoff) {
          discard;
        }
        ${(0,w.If)(!Q,w.H`fragColor = texColor * premultiplyAlpha(vcolor);`)}
      `),W&&!Q&&Y.main.add(w.H`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${w.H.float(1-R)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `),o&&Y.main.add("fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;"),!Q&&M&&Y.main.add("fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);"),2===r&&Y.main.add(w.H`if (fragColor.a < alphaCutoff) {
discard;
}`),J&&Y.main.add(w.H`fragColor = applyFocusAreaStyle(fragColor, focusAreaStyle);`),(0,s._o)(r)&&T&&Y.main.add("fragEmission = vec4(0.0);"),r){case 1:Y.main.add("\n        fragColor = vec4(fragColor.rgb * floatBlendOutputScale, fragColor.a);\n        fragAlpha = fragColor.a * floatBlendOutputScale;\n      ");break;case 2:Y.main.add("fragColor.rgb /= fragColor.a;");break;case 11:Y.main.add("outputObjectAndLayerIdColor();");break;case 10:t.include(u.Q,e),Y.main.add("outputHighlight(false);")}return t}function E(e){return e.outlineColor[3]>0&&e.outlineSize>0}function D(e){return e.textureIsSignedDistanceField?(t=e.anchorPosition,r=e.distanceFieldBoundingBox,o=H,(0,i.hZ)(o,t[0]*(r[2]-r[0])+r[0],t[1]*(r[3]-r[1])+r[1])):(0,i.C)(H,e.anchorPosition),H;var t,r,o}const H=(0,o.vt)(),R=.08,U=Object.freeze(Object.defineProperty({__proto__:null,anchorPosition:D,build:F},Symbol.toStringTag,{value:"Module"}))},40102(e,t,r){r.d(t,{i:()=>o});var i=r(92840);function o(e,t){return new Promise((r,o)=>{e.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA?r():(t((0,i.Oo)(e,"canplay",r)),t((0,i.Oo)(e,"error",o)))})}},93129(e,t,r){r.d(t,{F:()=>a});var i=r(69172),o=r(35542);class a{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.mode=null,this.centerInElevationSR=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=(0,i.Ao)(e)}get requiresSampledElevationInfo(){return"absolute-height"!==this.mode}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){const r=this.calculateOffsetRenderUnits(t);return null!=this.featureExpressionInfoContext?r:e+r}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset;const r=this.featureExpressionInfoContext;return null!=r&&(t+=(0,o.g7)(r)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=(0,i.Tg)(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}setFeatureExpressionInfoContext(e){this._featureExpressionInfoContext=e}updateFeatureExpressionInfoContextForGraphic(e,t,r){e.arcade?(this._featureExpressionInfoContext=(0,o.o8)(e),this.updateFeatureExpressionFeature(t,r)):this._featureExpressionInfoContext=e}updateFeatureExpressionFeature(e,t){const r=this.featureExpressionInfoContext;r?.arcade&&(r.cachedResult=void 0,(0,o.gf)(this._featureExpressionInfoContext,e.geometry?(0,o.VG)(r.arcade.modules,e,t):null))}static fromElevationInfo(e){const t=new a;return null!=e&&t.setFromElevationInfo(e),t}}},35542(e,t,r){r.d(t,{KF:()=>p,MF:()=>f,VG:()=>c,g7:()=>u,gf:()=>d,o8:()=>n,q6:()=>l});var i=r(80861),o=r(37623),a=r(96124),s=r(68717);function n(e){return{cachedResult:e.cachedResult,arcade:e.arcade?{func:e.arcade.func,context:e.arcade.modules.arcadeUtils.createExecContext(null,{sr:e.arcade.context.spatialReference}),modules:e.arcade.modules}:null}}async function l(e,t,r,i){const a=e?.expression;if("string"!=typeof a)return null;const n=function(e){return"0"===e?0:null}(a);if(null!=n)return{cachedResult:n};const l=await(0,s.l)();(0,o.Te)(r);const c=l.arcadeUtils,d=c.createSyntaxTree(a);if(!d)return null;if(c.dependsOnView(d))return null!=i&&i.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0};const u=c.createFunction(d);return u?{arcade:{modules:l,func:u,context:c.createExecContext(null,{sr:t})}}:null}function c(e,t,r){return e.arcadeUtils.createFeature(t.attributes,t.geometry,r)}function d(e,t){if(null!=e&&!h(e)){if(!t||!e.arcade)return void i.A.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils").errorOncePerTick("Arcade support required but not provided");const r=t;r._geometry&&(r._geometry=(0,a.wZ)(r._geometry)),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,t)}}function u(e){if(null!=e){if(h(e))return e.cachedResult;const t=e.arcade;let r=t?.modules.arcadeUtils.executeFunction(t.func,t.context);return"number"!=typeof r&&(e.cachedResult=0,r=0),r}return 0}function f(e,t=!1){let r=e?.featureExpressionInfo;const i=r?.expression;return t||"0"===i||(r=null),r??null}const p={cachedResult:0};function h(e){return null!=e.cachedResult}},11255(e,t,r){r.d(t,{Ge:()=>u,VQ:()=>p,yc:()=>d});var i=r(23572),o=r(71072),a=r(76982),s=r(15510),n=r(21586),l=r(92121),c=r(62462);class d{constructor(e){this.screenLength=(0,i.Lz)(e.screenLength),this.minWorldLength=e.minWorldLength??0,this.maxWorldLength=e.maxWorldLength??1/0}}function u(e,t){const r=e.vertex;t.hasVerticalOffset?(p(r),t.hasScreenSizePerspective&&(e.include(s.Y6),(0,s.OH)(r),(0,n.yu)(e.vertex,t)),r.code.add(c.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?c.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:c.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?c.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:c.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(c.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const f=(0,a.vt)();function p(e){e.uniforms.add(new l.E("verticalOffset",(e,t)=>{const{minWorldLength:r,maxWorldLength:i,screenLength:a}=e.verticalOffset,s=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),n=t.camera.pixelRatio||1;return(0,o.hZ)(f,a*n,s,r,i)}))}},65895(e,t,r){r.d(t,{K:()=>a});var i=r(70483),o=r(62462);function a(e){e.uniforms.add(new i.o("alignPixelEnabled",e=>e.alignPixelEnabled)),e.code.add(o.H`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),e.code.add(o.H`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}},87331(e,t,r){r.d(t,{Q:()=>u,R:()=>d});var i=r(11255),o=r(15510),a=r(21586),s=r(70751),n=r(41281),l=r(19635),c=r(62462);const d=.5;function u(e,t){const r=e.vertex;e.include(o.Y6),e.attributes.add("position","vec3"),e.vertex.inputs.add("position",()=>"position"),e.attributes.add("normal","vec3"),t.hasVertexCenterOffset?e.attributes.add("centerOffset","vec3"):r.constants.add("centerOffset","vec3",[0,0,0]),e.attributes.add("groundDistance","float"),(0,a.NB)(r,t),(0,a.yu)(r,t),r.uniforms.add(new s.I("viewport",e=>e.camera.fullViewport),new l.m("polygonOffset",e=>e.shaderPolygonOffset),new n.U("aboveGround",e=>e.camera.aboveGround?1:-1)),t.hasVerticalOffset&&(0,i.VQ)(r),r.code.add(c.H`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),r.code.add(c.H`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = aboveGround;
}
float groundRelative = aboveGround * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),t.draped&&!t.hasVerticalOffset||(0,a.S7)(r),t.draped||(r.uniforms.add(new n.U("perDistancePixelRatio",e=>Math.tan(e.camera.fovY/2)/(e.camera.fullViewport[2]/2))),r.code.add(c.H`
      void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
        float distanceToCamera = length(posView);

        // Compute offset in world units for a half pixel shift
        float pixelOffset = distanceToCamera * perDistancePixelRatio * ${c.H.float(d)};

        // Apply offset along normal in the direction away from the ground surface
        vec3 modelOffset = normalModel * aboveGround * pixelOffset;

        // Apply the same offset also on the view space position
        vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

        posModel += modelOffset;
        posView += viewOffset;
      }
    `)),t.screenCenterOffsetUnitsEnabled&&(0,a.Nz)(r),t.hasScreenSizePerspective&&(0,o.OH)(r),r.code.add(c.H`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      float pointGroundDistance = groundDistance;
      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.hasScreenSizePerspective&&(t.hasVerticalOffset||t.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${t.hasVerticalOffset?t.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${t.hasVerticalOffset?c.H`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${t.screenCenterOffsetUnitsEnabled?"":c.H`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${t.screenCenterOffsetUnitsEnabled?t.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${t.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}},16937(e,t,r){r.d(t,{E:()=>n,l:()=>l});var i=r(53334),o=r(56560),a=r(33),s=r(62462);function n(e){e.uniforms.add(new a.E("zProjectionMap",e=>l(e.camera))),e.code.add(s.H`float linearizeDepth(float depth, vec2 zProjectionConstants) {
float depthNdc = depth * 2.0 - 1.0;
return -(zProjectionConstants[0] / (depthNdc + zProjectionConstants[1] + 1e-7));
}
float linearizeDepth(float depth) {
return linearizeDepth(depth, zProjectionMap);
}`),e.code.add(s.H`float delinearizeDepth(float linearDepth) {
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
float depthNdc = (-c1/linearDepth) - c2 - 1e-7;
float depthNonlinear01 = (depthNdc + 1.0 ) / 2.0;
return depthNonlinear01;
}`),e.code.add(s.H`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return texelFetch(depthTexture, iuv, 0).r;
}`),e.code.add(s.H`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function l(e){const t=e.projectionMatrix;return(0,i.hZ)(c,t[14],t[10])}const c=(0,o.vt)()},36288(e,t,r){r.d(t,{Ir:()=>d});var i=r(53334),o=r(56560),a=r(71072),s=r(76982),n=r(33),l=r(70751),c=r(62462);function d(e){e.fragment.uniforms.add(new l.I("projInfo",e=>function(e){const t=e.projectionMatrix;return 0===t[11]?(0,a.hZ)(u,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,a.hZ)(u,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(e.camera))),e.fragment.uniforms.add(new n.E("zScale",e=>0===e.camera.projectionMatrix[11]?(0,i.hZ)(f,0,1):(0,i.hZ)(f,1,0))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const u=(0,s.vt)(),f=(0,o.vt)()},70483(e,t,r){r.d(t,{o:()=>o});var i=r(29162);class o extends i.n{constructor(e,t){super(e,"bool",0,(r,i)=>r.setUniform1b(e,t(i)))}}},99040(e,t,r){r.d(t,{X:()=>o});var i=r(29162);class o extends i.n{constructor(e,t,r){super(e,"mat4",1,(i,o,a)=>i.setUniformMatrix4fv(e,t(o,a),r))}}},34193(e,t,r){r.d(t,{i:()=>v});var i=r(31635),o=r(61985),a=r(69636),s=r(6744),n=r(84586),l=r(31566),c=r(70051),d=r(50837),u=r(15651);let f=class extends d.w{constructor(){super(...arguments),this.shader=new c.r(l.a,()=>r.e(20016).then(r.bind(r,20016))),this.ignoreUnused=!0}initializePipeline(){return(0,u.Ey)({colorWrite:u.kn})}};f=(0,i.Cg)([(0,a.$K)("esri.views.3d.webgl-engine.effects.focusArea.FocusAreaColorTechnique")],f);var p=r(68716);let h=class extends n.A{constructor(e){super({...e,view:e.focusAreasView.view}),this.consumes={required:[s.OG.FOCUSAREA_COLOR,s.OG.FOCUSAREA]},this.produces=s.OG.FOCUSAREA_COLOR,this._fadeDirection=0,this._passParameters=new l.F}fadeOut(e){this.removeAllHandles(),this._startTime=null,this._fadeDirection=1,this.addHandles((0,o.wB)(()=>this._passParameters.fadeFactor.value,t=>{0===t&&(this.removeAllHandles(),e())})),this.requestRender(2)}render(e){const t=e.find(({name:e})=>e===this.produces),r=this.techniques.getCompiled(f);if(!r)return this.requestRender(1),t;const i=this.focusAreasView.style,o=this.bindParameters,a=o.camera,n=a.fullViewport[2],l=a.fullViewport[3];this._startTime??=this.view.stage?.renderer.renderContext.time;const c=this.view.qualitySettings.fadeDuration,d=c>0?Math.min(c,this.view.stage?.renderer.renderContext.time-this._startTime)/c:1,u=e.find(({name:e})=>e===s.OG.FOCUSAREA),h=this.fboCache.acquire(n,l,this.produces),x=this.renderingContext;return x.bindFramebuffer(h.fbo),this._passParameters.color=t.getTexture(),this._passParameters.focusArea=u.getTexture(),this._passParameters.effect=v[i],this._passParameters.fadeFactor.value=0===this._fadeDirection?d:1-d,x.bindTechnique(r,o,this._passParameters),x.screen.draw(),h.attachDepth(t.getAttachment(p.nI)),d<1&&this.requestRender(2),h}};(0,i.Cg)([(0,a.MZ)()],h.prototype,"consumes",void 0),(0,i.Cg)([(0,a.MZ)()],h.prototype,"produces",void 0),(0,i.Cg)([(0,a.MZ)({constructOnly:!0})],h.prototype,"focusAreasView",void 0),h=(0,i.Cg)([(0,a.$K)("esri.views.3d.webgl-engine.effects.focusArea.FocusAreaColorNode")],h);const v={bright:0,dark:1}},71678(e,t,r){r.d(t,{NV:()=>c,m8:()=>n});var i=r(57725),o=r(37623),a=r(76687),s=r(13439);class n extends a.A{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this.updateTexture(e.textureId),this._acquire(e.normalTextureId,e=>this._textureNormal=e),this._acquire(e.emissiveTextureId,e=>this._textureEmissive=e),this._acquire(e.occlusionTextureId,e=>this._textureOcclusion=e),this._acquire(e.metallicRoughnessTextureId,e=>this._textureMetallicRoughness=e)}dispose(){super.dispose(),this._texture=(0,i.Gz)(this._texture),this._textureNormal=(0,i.Gz)(this._textureNormal),this._textureEmissive=(0,i.Gz)(this._textureEmissive),this._textureOcclusion=(0,i.Gz)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.Gz)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?2:1}get textureBindParameters(){return new c(this._texture?.texture??null,this._textureNormal?.texture??null,this._textureEmissive?.texture??null,this._textureOcclusion?.texture??null,this._textureMetallicRoughness?.texture??null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,i.Gz)(this._texture),this._acquire(e,e=>this._texture=e))}_acquire(e,t){if(null==e)return void t(null);const r=this._textures.acquire(e);if((0,o.$X)(r))return++this._numLoading,void r.then(e=>{if(this._disposed)return(0,i.Gz)(e),void t(null);t(e)}).finally(()=>--this._numLoading);t(r)}}class l extends s.Y{constructor(e=null){super(),this.textureEmissive=e}}class c extends l{constructor(e,t,r,i,o,a,s){super(r),this.texture=e,this.textureNormal=t,this.textureOcclusion=i,this.textureMetallicRoughness=o,this.scale=a,this.normalTextureTransformMatrix=s}}},22694(e,t,r){r.d(t,{R:()=>N});var i=r(4506),o=r(82541),a=r(79441),s=r(25336),n=r(26110),l=r(53334),c=r(56560),d=r(71573),u=r(19913),f=r(76982),p=r(2532),h=r(40041),v=r(15061),x=r(31882),g=r(77788),m=r(87331),C=r(71678),O=r(31272),S=r(84231),w=r(26421),z=r(29290),b=r(73395),y=r(32052),P=r(31635),A=r(69636),V=r(29386),_=r(7724),F=r(70051),E=r(50837),D=r(84618),H=r(8445),R=r(28849),U=r(68716),T=r(15651);let I=class extends E.w{constructor(e,t){super(e,t,(0,V.U)(M).concat((0,V.U)(j(t)))),this.shader=new F.r(y.H,()=>r.e(56884).then(r.bind(r,56884))),this.ignoreUnused=!0,this.primitiveType=U.WR.TRIANGLE_STRIP}initializePipeline(e){const{draped:t,output:r,depthTestEnabled:i}=e,o=(0,g._$)(r),a=i&&!t&&!o&&!(10===r);return(0,T.Ey)({blending:(0,H.Yf)(r,!0),depthTest:i&&!t?{func:515}:null,depthWrite:a?T.Uy:null,colorWrite:T.kn,polygonOffset:(0,R.sG)(e)})}};I=(0,P.Cg)([(0,A.$K)("esri.views.3d.webgl-engine.shaders.HUDMaterialTechnique")],I);const M=(0,_.BP)().vec2u8("uv0",{glNormalized:!0});function j(e){let t=(0,_.BP)().vec3f("position").vec3f("normal").f32("groundDistance");return e.hasVertexCenterOffset&&(t=t.vec3f("centerOffset")),e.hasVertexColor&&(t=t.vec4u8("color",{glNormalized:!0})),e.hasVertexSize&&(t=t.vec2f("size")),e.hasVertexRotation&&(t=t.f32("rotation")),(e.hasVVColor||e.hasVVSize)&&(t=t.vec4f("featureAttribute")),e.hasVertexUVi&&(t=t.vec4i16("uvi")),(0,D.E)()?t.vec4u8("olidColor"):t}var L=r(67069),B=r(18693);class W extends B.E{constructor(e,t){super(),this.spherical=e,this.polygonOffset=0,this.enableOITOffset=!1,this.screenCenterOffsetUnitsEnabled=!1,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.occludedFragmentFade=!1,this.hasOcclusionTexture=!1,this.hasFocusAreaStyle=!1,this.hasVertexColor=!0,this.hasVertexSize=!0,this.hasVertexRotation=!0,this.hasVertexUVi=!0,this.hasVertexCenterOffset=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.hasVVInstancing=!1,this.snowCover=!1,this.transparentOccluded=t}}(0,P.Cg)([(0,L.W)()],W.prototype,"transparentOccluded",void 0),(0,P.Cg)([(0,L.W)({count:5})],W.prototype,"polygonOffset",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"enableOITOffset",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"screenCenterOffsetUnitsEnabled",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"signedDistanceFieldEnabled",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"hasVVSize",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"hasVVColor",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"hasVerticalOffset",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"hasScreenSizePerspective",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"hasRotation",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"debugDrawLabelBorder",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"depthTestEnabled",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"pixelSnappingEnabled",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"draped",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"occludedFragmentFade",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"hasOcclusionTexture",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"hasFocusAreaStyle",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"hasVertexColor",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"hasVertexSize",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"hasVertexRotation",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"hasVertexUVi",void 0),(0,P.Cg)([(0,L.W)()],W.prototype,"hasVertexCenterOffset",void 0);var G=r(76221);class N extends O.i{constructor(e,t,r=!1){super(e,fe),this.produces=new Map([[12,e=>(0,g.Lc)(e)&&!this.parameters.drawAsLabel&&!this._configuration.transparentOccluded],[13,e=>(0,g.Lc)(e)&&!this.parameters.drawAsLabel&&this._configuration.transparentOccluded],[14,e=>(0,g.Lc)(e)&&this.parameters.drawAsLabel],[18,e=>this.parameters.draped&&(0,g.Lc)(e)]]),this._visible=!0,this._configuration=new W(t,r)}updateConfiguration(e){super.updateConfiguration(e);const{parameters:t,_configuration:r}=this,i=t.draped;r.enableOITOffset=e.enableOITOffset,r.hasSlicePlane=this.parameters.hasSlicePlane,r.hasVerticalOffset=!!this.parameters.verticalOffset,r.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,r.screenCenterOffsetUnitsEnabled="screen"===this.parameters.centerOffsetUnits,r.polygonOffset=this.parameters.polygonOffset,r.draped=i,r.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,r.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,r.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,r.hasRotation=this.parameters.hasRotation,r.hasVVSize=!!this.parameters.vvSize,r.hasVVColor=!!this.parameters.vvColor,r.occludedFragmentFade=!i&&!!this.parameters.occludedFragmentOpacity,r.hasFocusAreaStyle=null!=this.parameters.focusAreaStyle,r.depthTestEnabled=this.parameters.depthEnabled,r.hasVertexColor=this.parameters.hasVertexColor,r.hasVertexSize=this.parameters.hasVertexSize,r.hasVertexRotation=this.parameters.hasVertexRotation,r.hasVertexUVi=this.parameters.hasVertexUVi,r.hasVertexCenterOffset=this.parameters.hasVertexCenterOffset,(0,g._o)(e.output)&&(r.debugDrawLabelBorder=!!x.b.LABELS_SHOW_BORDER),r.hasOcclusionTexture=!t.drawAsLabel&&r.transparentOccluded&&(0,g.ZH)(e.output)}intersect(e,t,r,i,a,n){const{options:{selectionMode:l,hud:c,excludeLabels:p},point:h,camera:v}=r,{parameters:x}=this;if(!l||!c||p&&x.isLabel||!e.visible||!h||!v)return;const g=e.attributes.get("featureAttribute"),m=null==g?null:(0,f.ci)(g.data,se),{scaleX:C,scaleY:O}=he(m,x,v.pixelRatio),S=e.attributes.get("position"),z=e.attributes.get("size"),b=e.attributes.get("normal"),P=e.attributes.get("rotation"),A=e.attributes.get("centerOffset"),V=this.parameters.size;(0,w.vA)(S.size>=3);const _="screen"===this.parameters.centerOffsetUnits;for(let e=0;e<S.data.length/S.size;e++){const i=e*S.size;if((0,d.hZ)(Y,S.data[i],S.data[i+1],S.data[i+2]),(0,d.Z0)(Y,Y,t),(0,d.Z0)(Y,Y,v.viewMatrix),A){const t=e*A.size;(0,d.hZ)(oe,A.data[t],A.data[t+1],A.data[t+2])}else(0,d.hZ)(oe,0,0,0);if(!_&&(Y[0]+=oe[0],Y[1]+=oe[1],0!==oe[2])){const e=oe[2];(0,d.S8)(oe,Y),(0,d.Re)(Y,Y,(0,d.hs)(oe,oe,e))}const a=e*b.size;(0,d.hZ)(Q,b.data[a],b.data[a+1],b.data[a+2]),(0,d.ei)(Q,Q,(0,o.z0)(re,t));const{normal:l,cosAngle:c}=q(Q,v,ne),f=ve(this.parameters,Y,c,v,k);if((0,d.Ln)(Y,Y,l,f),v.applyProjection(Y,X),X[0]>-1){if(_&&(oe[0]||oe[1])&&(X[0]+=oe[0]*v.pixelRatio,0!==oe[1]&&(X[1]+=k.alignmentEvaluator.apply(oe[1])*v.pixelRatio),v.unapplyProjection(X,Y)),X[0]+=this.parameters.screenOffset[0]*v.pixelRatio,X[1]+=this.parameters.screenOffset[1]*v.pixelRatio,X[0]=Math.floor(X[0]),X[1]=Math.floor(X[1]),de[0]=V[0],de[1]=V[1],null!=z){const t=e*z.size;de[0]*=z.data[t],de[1]*=z.data[t+1]}k.evaluator.applyVec2(de,de);const t=le*v.pixelRatio;let i=0;x.textureIsSignedDistanceField&&(i=Math.min(x.outlineSize,.5*de[0])*v.pixelRatio/2),de[0]*=C,de[1]*=O;const o=x.rotation+(null!=P?P.data[e*P.size]:0),a=(0,y.a)(x);if(Z(h,X[0],X[1],de,t,i,o,x,a)){const e=r.ray;if((0,d.Z0)(J,Y,(0,s.B8)(ie,v.viewMatrix)),X[0]=h[0],X[1]=h[1],v.unprojectFromRenderScreen(X,Y)){const t=(0,u.vt)();(0,d.C)(t,e.direction);const r=1/(0,d.Bw)(t);(0,d.hs)(t,t,r),n((0,d.Io)(e.origin,Y)*r,t,-1,J)}}}}}intersectDraped(e,t,r,i,o){const a=e.attributes.get("position"),s=e.attributes.get("size"),n=e.attributes.get("rotation"),l=this.parameters,c=l.size,d=e.attributes.get("featureAttribute"),u=null==d?null:(0,f.ci)(d.data,se),{scaleX:p,scaleY:h}=he(u,l,e.screenToWorldRatio),v=ce*e.screenToWorldRatio;for(let t=0;t<a.data.length/a.size;t++){const d=t*a.size,u=a.data[d],f=a.data[d+1];if(de[0]=c[0],de[1]=c[1],null!=s){const e=t*s.size;de[0]*=s.data[e],de[1]*=s.data[e+1]}let x=0;l.textureIsSignedDistanceField&&(x=Math.min(l.outlineSize,.5*de[0])*e.screenToWorldRatio/2),de[0]*=p,de[1]*=h;const g=l.rotation+(null!=n?n.data[t*n.size]:0),m=(0,y.a)(l);Z(r,u,f,de,v,x,g,l,m)&&i(o.distance,o.normal,-1)}}createBufferWriter(){return new pe(this.parameters)}applyShaderOffsets(e,t,r,i,a,s,n,l){(0,d.ei)(K,r,(0,o.z0)(re,i));const c=q(K,n,ne),u=function(e,t){const r=t.computeRenderPixelSizeAtDist(e)*m.R;return(t.aboveGround?1:-1)*r}((0,d.Bw)(t),n),f=ve(this.parameters,t,c.cosAngle,n,l);(0,d.Ln)(t,t,c.normal,f+u),(0,d.Ln)(e,e,K,f+u);const p=s+f;this._applyPolygonOffsetView(t,c,p,n,t),this._applyCenterOffsetView(t,a,t)}applyShaderOffsetsNDC(e,t,r,i,o,a){return this._applyCenterOffsetNDC(e,t,i,o),null!=a&&(0,d.C)(a,o),this._applyPolygonOffsetNDC(o,r,i,o),o}_applyPolygonOffsetView(e,t,r,o,a){const s=o.aboveGround?1:-1;let n=Math.sign(r);0===n&&(n=s);const l=s*n;if(this.parameters.shaderPolygonOffset<=0)return(0,d.C)(a,e);const c=(0,i.qE)(Math.abs(t.cosAngle),.01,1),u=1-Math.sqrt(1-c*c)/c/o.viewport[2];return(0,d.hs)(a,e,l>0?u:1/u),a}_applyCenterOffsetView(e,t,r){const i="screen"!==this.parameters.centerOffsetUnits;return r!==e&&(0,d.C)(r,e),i&&(r[0]+=t[0],r[1]+=t[1],t[2]&&((0,d.S8)(Q,r),(0,d.jb)(r,r,(0,d.hs)(Q,Q,t[2])))),r}_applyCenterOffsetNDC(e,t,r,i){const o="screen"!==this.parameters.centerOffsetUnits;return i!==e&&(0,d.C)(i,e),o||(i[0]+=t[0]/r.fullWidth*2,i[1]+=t[1]/r.fullHeight*2),i}_applyPolygonOffsetNDC(e,t,r,i){const o=this.parameters.shaderPolygonOffset;if(e!==i&&(0,d.C)(i,e),o){const e=r.aboveGround?1:-1,a=e*Math.sign(t);i[2]-=(a||e)*o}return i}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:t,outlineColor:r}=this.parameters,i=e[3]>=G.Q||t>=G.Q&&r[3]>=G.Q;return this._visible&&i}createGLMaterial(e){return new $(e)}calculateRelativeScreenBounds(e,t,r=(0,p.vt)()){return function(e,t,r,i){i[0]=e.anchorPosition[0]*-t[0]+e.screenOffset[0]*r,i[1]=e.anchorPosition[1]*-t[1]+e.screenOffset[1]*r}(this.parameters,e,t,r),r[2]=r[0]+e[0],r[3]=r[1]+e[1],r}}class $ extends C.m8{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(I,e)}}function q(e,t,r){return(0,d.Z0)(r.normal,e,t.viewInverseTransposeMatrix),r.cosAngle=(0,d.Om)(r.normal,ue),r}function Z(e,t,r,o,a,s,n,c,d){let u=t-a-o[0]*d[0],f=u+o[0]+2*a,p=r-a-o[1]*d[1],h=p+o[1]+2*a;const v=c.distanceFieldBoundingBox;return c.textureIsSignedDistanceField&&null!=v&&(u+=o[0]*v[0],p+=o[1]*v[1],f-=o[0]*(1-v[2]),h-=o[1]*(1-v[3]),u-=s,f+=s,p-=s,h+=s),(0,l.hZ)(te,t,r),(0,l.e$)(ee,e,te,(0,i.kU)(n)),ee[0]>u&&ee[0]<f&&ee[1]>p&&ee[1]<h}const k=new S.fc,Y=(0,u.vt)(),Q=(0,u.vt)(),X=(0,f.vt)(),K=(0,u.vt)(),J=(0,u.vt)(),ee=(0,c.vt)(),te=(0,c.vt)(),re=(0,a.vt)(),ie=(0,n.vt)(),oe=(0,u.vt)(),ae=(0,u.vt)(),se=(0,f.vt)(),ne={normal:(0,u.vt)(),cosAngle:0},le=1,ce=2,de=(0,c.fA)(0,0),ue=(0,u.fA)(0,0,1);class fe extends C.NV{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1,this.color=f.Un,this.size=c.Un,this.polygonOffset=0,this.anchorPosition=(0,c.fA)(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=f.Un,this.outlineSize=0,this.distanceFieldBoundingBox=(0,f.vt)(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.hasVertexColor=!1,this.hasVertexSize=!1,this.hasVertexRotation=!1,this.hasVertexUVi=!1,this.hasVertexCenterOffset=!1,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.focusAreaStyle=null,this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class pe{constructor(e){this.baseInstanceLayout=M,this.layout=j(e)}elementCount(e){return e.get("position").indices.length}elementCountBaseInstance(e){return e.get("uv0").indices.length}write(e,t,r,i,o){const{buffer:a,offset:s}=o,{position:n,normal:l,color:c,size:d,rotation:u,centerOffset:f,groundDistance:p,featureAttribute:v,uvi:x}=a;(0,z.Hk)(r.get("position"),e,n,s),(0,z.p1)(r.get("normal"),t,l,s);const g=r.get("position").indices.length;if(x){const e=r.get("uvi")?.data;if(e&&e.length>=4){const[t,r,i,o]=e;for(let e=0;e<g;++e){const a=s+e;x.setValues(a,t,r,i,o)}}}if(c&&(0,z.tb)(r.get("color"),4,c,s),d&&(0,z.Ue)(r.get("size"),d,s),u&&(0,z.uO)(r.get("rotation"),u,s),f&&(r.get("centerOffset")?(0,z.NC)(r.get("centerOffset"),f,s):(0,z.Hv)(f,s,g)),r.get("groundDistance")?(0,z.uO)(r.get("groundDistance"),p,s):(0,z.Hv)(p,s,g),v&&(r.get("featureAttribute")?(0,z.Ut)(r.get("featureAttribute"),v,s):(0,z.Hv)(v,s,g)),null!=i){const e=r.get("position")?.indices;if(e){const t=e.length,r=a.getField("olidColor",h.XP);(0,z.vx)(i,r,t,s)}}}writeBaseInstance(e,t){const{uv0:r}=t;(0,z.Ue)(e.get("uv0"),r,0)}}function he(e,t,r){return null==e||null==t.vvSize?{scaleX:r,scaleY:r}:((0,v.VC)(ae,t,e),{scaleX:ae[0]*r,scaleY:ae[1]*r})}function ve(e,t,r,i,o){if(!e.verticalOffset?.screenLength){const i=(0,d.Bw)(t);return o.update(r,i,e.screenSizePerspective,e.screenSizePerspectiveMinPixelReferenceSize,e.screenSizePerspectiveAlignment,null),0}const a=(0,d.Bw)(t),s=e.screenSizePerspectiveAlignment??e.screenSizePerspective,n=(0,b.kE)(i,a,e.verticalOffset,r,s,e.screenSizePerspectiveMinPixelReferenceSize);return o.update(r,a,e.screenSizePerspective,e.screenSizePerspectiveMinPixelReferenceSize,e.screenSizePerspectiveAlignment,null),n}}}]);