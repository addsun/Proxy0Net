/** @license CanvasTool.PngEncoder 2012 - imaya [ https://github.com/imaya/CanvasTool.PngEncoder ] The MIT License */
(function() {'use strict';var aa=this;function j(a,c,b){a=a.split(".");b=b||aa;!(a[0]in b)&&b.execScript&&b.execScript("var "+a[0]);for(var e;a.length&&(e=a.shift());)!a.length&&void 0!==c?b[e]=c:b=b[e]?b[e]:b[e]={}}Math.floor(2147483648*Math.random()).toString(36);var m="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Uint32Array;function n(a,c){this.index="number"===typeof c?c:0;this.r=0;this.buffer=a instanceof(m?Uint8Array:Array)?a:new (m?Uint8Array:Array)(32768);if(2*this.buffer.length<=this.index)throw Error("invalid index");this.buffer.length<=this.index&&this.I()}n.prototype.I=function(){var a=this.buffer,c,b=a.length,e=new (m?Uint8Array:Array)(b<<1);if(m)e.set(a);else for(c=0;c<b;++c)e[c]=a[c];return this.buffer=e};
n.prototype.d=function(a,c,b){var e=this.buffer,d=this.index,f=this.r,g=e[d];b&&1<c&&(a=8<c?(r[a&255]<<24|r[a>>>8&255]<<16|r[a>>>16&255]<<8|r[a>>>24&255])>>32-c:r[a]>>8-c);if(8>c+f)g=g<<c|a,f+=c;else for(b=0;b<c;++b)g=g<<1|a>>c-b-1&1,8===++f&&(f=0,e[d++]=r[g],g=0,d===e.length&&(e=this.I()));e[d]=g;this.buffer=e;this.r=f;this.index=d};n.prototype.finish=function(){var a=this.buffer,c=this.index;0<this.r&&(a[c]<<=8-this.r,a[c]=r[a[c]],c++);m?a=a.subarray(0,c):a.length=c;return a};
var ba=new (m?Uint8Array:Array)(256),w;for(w=0;256>w;++w){for(var ca=ba,da=w,x=w,z=x,ea=7,x=x>>>1;x;x>>>=1)z<<=1,z|=x&1,--ea;ca[da]=(z<<ea&255)>>>0}var r=ba;var A={ca:function(a,c,b){return A.update(a,0,c,b)},update:function(a,c,b,e){for(var d=A.aa,f="number"===typeof b?b:b=0,e="number"===typeof e?e:a.length,c=c^4294967295,f=e&7;f--;++b)c=c>>>8^d[(c^a[b])&255];for(f=e>>3;f--;b+=8)c=c>>>8^d[(c^a[b])&255],c=c>>>8^d[(c^a[b+1])&255],c=c>>>8^d[(c^a[b+2])&255],c=c>>>8^d[(c^a[b+3])&255],c=c>>>8^d[(c^a[b+4])&255],c=c>>>8^d[(c^a[b+5])&255],c=c>>>8^d[(c^a[b+6])&255],c=c>>>8^d[(c^a[b+7])&255];return(c^4294967295)>>>0}},fa,ga=[0,1996959894,3993919788,2567524794,
124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,
3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,
2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,
2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,
2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918E3,2847714899,3736837829,1202900863,
817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];fa=m?new Uint32Array(ga):ga;A.aa=fa;function B(a){this.buffer=new (m?Uint16Array:Array)(2*a);this.length=0}B.prototype.getParent=function(a){return 2*((a-2)/4|0)};B.prototype.ra=function(a){return 2*a+2};B.prototype.push=function(a,c){var b,e,d=this.buffer,f;b=this.length;d[this.length++]=c;for(d[this.length++]=a;0<b;)if(e=this.getParent(b),d[b]>d[e])f=d[b],d[b]=d[e],d[e]=f,f=d[b+1],d[b+1]=d[e+1],d[e+1]=f,b=e;else break;return this.length};
B.prototype.pop=function(){var a,c,b=this.buffer,e,d,f;c=b[0];a=b[1];this.length-=2;b[0]=b[this.length];b[1]=b[this.length+1];for(f=0;;){d=this.ra(f);if(d>=this.length)break;d+2<this.length&&b[d+2]>b[d]&&(d+=2);if(b[d]>b[f])e=b[f],b[f]=b[d],b[d]=e,e=b[f+1],b[f+1]=b[d+1],b[d+1]=e;else break;f=d}return{index:a,value:c,length:this.length}};function C(a){var c=a.length,b=0,e=Number.POSITIVE_INFINITY,d,f,g,h,k,p,l,o,i;for(o=0;o<c;++o)a[o]>b&&(b=a[o]),a[o]<e&&(e=a[o]);d=1<<b;f=new (m?Uint32Array:Array)(d);g=1;h=0;for(k=2;g<=b;){for(o=0;o<c;++o)if(a[o]===g){p=0;l=h;for(i=0;i<g;++i)p=p<<1|l&1,l>>=1;for(i=p;i<d;i+=k)f[i]=g<<16|o;++h}++g;h<<=1;k<<=1}return[f,b,e]};function D(a,c){this.p=E;this.P=0;this.input=a;this.h=0;if(c&&(c.lazy&&(this.P=c.lazy),"number"===typeof c.compressionType&&(this.p=c.compressionType),c.outputBuffer&&(this.b=m&&c.outputBuffer instanceof Array?new Uint8Array(c.outputBuffer):c.outputBuffer),"number"===typeof c.outputIndex))this.h=c.outputIndex;this.b||(this.b=new (m?Uint8Array:Array)(32768))}var E=2,ha={NONE:0,Z:1,F:E,ib:3},F=[],G;
for(G=0;288>G;G++)switch(!0){case 143>=G:F.push([G+48,8]);break;case 255>=G:F.push([G-144+400,9]);break;case 279>=G:F.push([G-256+0,7]);break;case 287>=G:F.push([G-280+192,8]);break;default:throw"invalid literal: "+G;}
D.prototype.o=function(){var a,c,b,e=this.input;switch(this.p){case 0:c=0;for(b=e.length;c<b;)a=m?e.subarray(c,c+65535):e.slice(c,c+65535),c+=a.length,this.Fa(a,c===b);break;case 1:this.b=this.Ba(e,!0);this.h=this.b.length;break;case E:this.b=this.Aa(e,!0);this.h=this.b.length;break;default:throw"invalid compression type";}return this.b};
D.prototype.Fa=function(a,c){var b,e,d=this.b,f=this.h;if(m){for(d=new Uint8Array(this.b.buffer);d.length<=f+a.length+5;)d=new Uint8Array(d.length<<1);d.set(this.b)}d[f++]=(c?1:0)|0;b=a.length;e=~b+65536&65535;d[f++]=b&255;d[f++]=b>>>8&255;d[f++]=e&255;d[f++]=e>>>8&255;if(m)d.set(a,f),f+=a.length,d=d.subarray(0,f);else{b=0;for(e=a.length;b<e;++b)d[f++]=a[b];d.length=f}this.h=f;return this.b=d};
D.prototype.Ba=function(a,c){var b=new n(new Uint8Array(this.b.buffer),this.h);b.d(c?1:0,1,!0);b.d(1,2,!0);this.la(this.Q(a),b);return b.finish()};
D.prototype.Aa=function(a,c){var b=new n(new Uint8Array(this.b),this.h),e,d,f,g,h=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],k,p,l,o,i,t,v=Array(19),u;e=E;b.d(c?1:0,1,!0);b.d(e,2,!0);e=this.Q(a);k=this.A(this.oa,15);p=this.z(k);l=this.A(this.na,7);o=this.z(l);for(d=286;257<d&&0===k[d-1];d--);for(f=30;1<f&&0===l[f-1];f--);i=this.va(d,k,f,l);t=this.A(i.ma,7);for(u=0;19>u;u++)v[u]=t[h[u]];for(g=19;4<g&&0===v[g-1];g--);h=this.z(t);b.d(d-257,5,!0);b.d(f-1,5,!0);b.d(g-4,4,!0);for(u=0;u<g;u++)b.d(v[u],
3,!0);u=0;for(v=i.v.length;u<v;u++)if(d=i.v[u],b.d(h[d],t[d],!0),16<=d){u++;switch(d){case 16:d=2;break;case 17:d=3;break;case 18:d=7;break;default:throw"invalid code: "+d;}b.d(i.v[u],d,!0)}this.ea(e,[p,k],[o,l],b);return b.finish()};D.prototype.ea=function(a,c,b,e){var d,f,g,h,k;g=c[0];c=c[1];h=b[0];k=b[1];b=0;for(d=a.length;b<d;++b)if(f=a[b],e.d(g[f],c[f],!0),256<f)e.d(a[++b],a[++b],!0),f=a[++b],e.d(h[f],k[f],!0),e.d(a[++b],a[++b],!0);else if(256===f)break;return e};
D.prototype.la=function(a,c){var b,e,d;b=0;for(e=a.length;b<e;b++)if(d=a[b],n.prototype.d.apply(c,F[d]),256<d)c.d(a[++b],a[++b],!0),c.d(a[++b],5),c.d(a[++b],a[++b],!0);else if(256===d)break;return c};function H(a,c){this.length=a;this.ba=c}
function ia(a){switch(!0){case 3===a:return[257,a-3,0];case 4===a:return[258,a-4,0];case 5===a:return[259,a-5,0];case 6===a:return[260,a-6,0];case 7===a:return[261,a-7,0];case 8===a:return[262,a-8,0];case 9===a:return[263,a-9,0];case 10===a:return[264,a-10,0];case 12>=a:return[265,a-11,1];case 14>=a:return[266,a-13,1];case 16>=a:return[267,a-15,1];case 18>=a:return[268,a-17,1];case 22>=a:return[269,a-19,2];case 26>=a:return[270,a-23,2];case 30>=a:return[271,a-27,2];case 34>=a:return[272,a-31,2];case 42>=
a:return[273,a-35,3];case 50>=a:return[274,a-43,3];case 58>=a:return[275,a-51,3];case 66>=a:return[276,a-59,3];case 82>=a:return[277,a-67,4];case 98>=a:return[278,a-83,4];case 114>=a:return[279,a-99,4];case 130>=a:return[280,a-115,4];case 162>=a:return[281,a-131,5];case 194>=a:return[282,a-163,5];case 226>=a:return[283,a-195,5];case 257>=a:return[284,a-227,5];case 258===a:return[285,a-258,0];default:throw"invalid length: "+a;}}var I=[],J,K;for(J=3;258>=J;J++)K=ia(J),I[J]=K[2]<<24|K[1]<<16|K[0];
var ja=m?new Uint32Array(I):I;
H.prototype.sa=function(a){switch(!0){case 1===a:a=[0,a-1,0];break;case 2===a:a=[1,a-2,0];break;case 3===a:a=[2,a-3,0];break;case 4===a:a=[3,a-4,0];break;case 6>=a:a=[4,a-5,1];break;case 8>=a:a=[5,a-7,1];break;case 12>=a:a=[6,a-9,2];break;case 16>=a:a=[7,a-13,2];break;case 24>=a:a=[8,a-17,3];break;case 32>=a:a=[9,a-25,3];break;case 48>=a:a=[10,a-33,4];break;case 64>=a:a=[11,a-49,4];break;case 96>=a:a=[12,a-65,5];break;case 128>=a:a=[13,a-97,5];break;case 192>=a:a=[14,a-129,6];break;case 256>=a:a=
[15,a-193,6];break;case 384>=a:a=[16,a-257,7];break;case 512>=a:a=[17,a-385,7];break;case 768>=a:a=[18,a-513,8];break;case 1024>=a:a=[19,a-769,8];break;case 1536>=a:a=[20,a-1025,9];break;case 2048>=a:a=[21,a-1537,9];break;case 3072>=a:a=[22,a-2049,10];break;case 4096>=a:a=[23,a-3073,10];break;case 6144>=a:a=[24,a-4097,11];break;case 8192>=a:a=[25,a-6145,11];break;case 12288>=a:a=[26,a-8193,12];break;case 16384>=a:a=[27,a-12289,12];break;case 24576>=a:a=[28,a-16385,13];break;case 32768>=a:a=[29,a-
24577,13];break;default:throw"invalid distance";}return a};H.prototype.fb=function(){var a=this.ba,c=[],b=0,e;e=ja[this.length];c[b++]=e&65535;c[b++]=e>>16&255;c[b++]=e>>24;e=this.sa(a);c[b++]=e[0];c[b++]=e[1];c[b++]=e[2];return c};
D.prototype.Q=function(a){function c(a,b){var c=a.fb(),d,e;d=0;for(e=c.length;d<e;++d)p[l++]=c[d];i[c[0]]++;t[c[3]]++;o=a.length+b-1;k=null}var b,e,d,f,g,h={},k,p=m?new Uint16Array(2*a.length):[],l=0,o=0,i=new (m?Uint32Array:Array)(286),t=new (m?Uint32Array:Array)(30),v=this.P;if(!m){for(d=0;285>=d;)i[d++]=0;for(d=0;29>=d;)t[d++]=0}i[256]=1;b=0;for(e=a.length;b<e;++b){d=g=0;for(f=3;d<f&&b+d!==e;++d)g=g<<8|a[b+d];void 0===h[g]&&(h[g]=[]);d=h[g];if(!(0<o--)){for(;0<d.length&&32768<b-d[0];)d.shift();
if(b+3>=e){k&&c(k,-1);d=0;for(f=e-b;d<f;++d)g=a[b+d],p[l++]=g,++i[g];break}0<d.length?(f=this.ab(a,b,d),k?k.length<f.length?(g=a[b-1],p[l++]=g,++i[g],c(f,0)):c(k,-1):f.length<v?k=f:c(f,0)):k?c(k,-1):(g=a[b],p[l++]=g,++i[g])}d.push(b)}p[l++]=256;i[256]++;this.oa=i;this.na=t;return m?p.subarray(0,l):p};
D.prototype.ab=function(a,c,b){var e,d,f=0,g,h,k,p=a.length;h=0;k=b.length;a:for(;h<k;h++){e=b[k-h-1];g=3;if(3<f){for(g=f;3<g;g--)if(a[e+g-1]!==a[c+g-1])continue a;g=f}for(;258>g&&c+g<p&&a[e+g]===a[c+g];)++g;g>f&&(d=e,f=g);if(258===g)break}return new H(f,c-d)};
D.prototype.va=function(a,c,b,e){var d=new (m?Uint32Array:Array)(a+b),f,g,h=new (m?Uint32Array:Array)(316),k=new (m?Uint8Array:Array)(19);for(f=g=0;f<a;f++)d[g++]=c[f];for(f=0;f<b;f++)d[g++]=e[f];if(!m){f=0;for(c=k.length;f<c;++f)k[f]=0}f=b=0;for(c=d.length;f<c;f+=g){for(g=1;f+g<c&&d[f+g]===d[f];++g);a=g;if(0===d[f])if(3>a)for(;0<a--;)h[b++]=0,k[0]++;else for(;0<a;)e=138>a?a:138,e>a-3&&e<a&&(e=a-3),10>=e?(h[b++]=17,h[b++]=e-3,k[17]++):(h[b++]=18,h[b++]=e-11,k[18]++),a-=e;else if(h[b++]=d[f],k[d[f]]++,
a--,3>a)for(;0<a--;)h[b++]=d[f],k[d[f]]++;else for(;0<a;)e=6>a?a:6,e>a-3&&e<a&&(e=a-3),h[b++]=16,h[b++]=e-3,k[16]++,a-=e}return{v:m?h.subarray(0,b):h.slice(0,b),ma:k}};
D.prototype.A=function(a,c){var b=a.length,e=new B(572),d=new (m?Uint8Array:Array)(b),f,g,h;if(!m)for(g=0;g<b;g++)d[g]=0;for(g=0;g<b;++g)0<a[g]&&e.push(g,a[g]);b=Array(e.length/2);f=new (m?Uint32Array:Array)(e.length/2);if(1===b.length)return d[e.pop().index]=1,d;g=0;for(h=e.length/2;g<h;++g)b[g]=e.pop(),f[g]=b[g].value;e=this.Ya(f,f.length,c);g=0;for(h=b.length;g<h;++g)d[b[g].index]=e[g];return d};
D.prototype.Ya=function(a,c,b){function e(a){var b=k[a][p[a]];b===c?(e(a+1),e(a+1)):--g[b];++p[a]}var d=new (m?Uint16Array:Array)(b),f=new (m?Uint8Array:Array)(b),g=new (m?Uint8Array:Array)(c),h=Array(b),k=Array(b),p=Array(b),l=(1<<b)-c,o=1<<b-1,i,t;d[b-1]=c;for(i=0;i<b;++i)l<o?f[i]=0:(f[i]=1,l-=o),l<<=1,d[b-2-i]=(d[b-1-i]/2|0)+c;d[0]=f[0];h[0]=Array(d[0]);k[0]=Array(d[0]);for(i=1;i<b;++i)d[i]>2*d[i-1]+f[i]&&(d[i]=2*d[i-1]+f[i]),h[i]=Array(d[i]),k[i]=Array(d[i]);for(l=0;l<c;++l)g[l]=b;for(o=0;o<d[b-
1];++o)h[b-1][o]=a[o],k[b-1][o]=o;for(l=0;l<b;++l)p[l]=0;1===f[b-1]&&(--g[0],++p[b-1]);for(i=b-2;0<=i;--i){b=l=0;t=p[i+1];for(o=0;o<d[i];o++)b=h[i+1][t]+h[i+1][t+1],b>a[l]?(h[i][o]=b,k[i][o]=c,t+=2):(h[i][o]=a[l],k[i][o]=l,++l);p[i]=0;1===f[i]&&e(i)}return g};
D.prototype.z=function(a){var c=new (m?Uint16Array:Array)(a.length),b=[],e=[],d=0,f,g,h;f=0;for(g=a.length;f<g;f++)b[a[f]]=(b[a[f]]|0)+1;f=1;for(g=16;f<=g;f++){e[f]=d;d+=b[f]|0;if(d>1<<f)throw"overcommitted";d<<=1}if(65536>d)throw"undercommitted";f=0;for(g=a.length;f<g;f++){d=e[a[f]];e[a[f]]+=1;b=c[f]=0;for(h=a[f];b<h;b++)c[f]=c[f]<<1|d&1,d>>>=1}return c};function L(a,c){this.input=a;this.b=new (m?Uint8Array:Array)(32768);this.p=M.F;var b={},e;if((c||!(c={}))&&"number"===typeof c.compressionType)this.p=c.compressionType;for(e in c)b[e]=c[e];b.outputBuffer=this.b;this.U=new D(this.input,b)}var M=ha;
L.prototype.o=function(){var a,c,b,e=0;b=this.b;a=N;switch(a){case N:c=Math.LOG2E*Math.log(32768)-8;break;default:throw Error("invalid compression method");}c=c<<4|a;b[e++]=c;switch(a){case N:switch(this.p){case M.NONE:a=0;break;case M.Z:a=1;break;case M.F:a=2;break;default:throw Error("unsupported compression type");}break;default:throw Error("invalid compression method");}a=a<<6|0;b[e++]=a|31-(256*c+a)%31;b=this.input;if("string"===typeof b){b=b.split("");c=0;for(a=b.length;c<a;c++)b[c]=(b[c].charCodeAt(0)&
255)>>>0}c=1;a=0;for(var d=b.length,f,g=0;0<d;){f=1024<d?1024:d;d-=f;do c+=b[g++],a+=c;while(--f);c%=65521;a%=65521}c=(a<<16|c)>>>0;this.U.h=e;b=this.U.o();e=b.length;m&&(b=new Uint8Array(b.buffer),b.length<=e+4&&(this.b=new Uint8Array(b.length+4),this.b.set(b),b=this.b),b=b.subarray(0,e+4));b[e++]=c>>24&255;b[e++]=c>>16&255;b[e++]=c>>8&255;b[e++]=c&255;return b};var ka=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];m&&new Uint16Array(ka);var la=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258];m&&new Uint16Array(la);var ma=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0];m&&new Uint8Array(ma);var na=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];m&&new Uint16Array(na);
var oa=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];m&&new Uint8Array(oa);var O=new (m?Uint8Array:Array)(288),P,pa;P=0;for(pa=O.length;P<pa;++P)O[P]=143>=P?8:255>=P?9:279>=P?7:8;C(O);var qa=new (m?Uint8Array:Array)(30),Q,ra;Q=0;for(ra=qa.length;Q<ra;++Q)qa[Q]=5;C(qa);var sa=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];m&&new Uint16Array(sa);var ta=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258];m&&new Uint16Array(ta);var ua=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0];m&&new Uint8Array(ua);var va=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];m&&new Uint16Array(va);
var wa=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];m&&new Uint8Array(wa);var xa=new (m?Uint8Array:Array)(288),R,ya;R=0;for(ya=xa.length;R<ya;++R)xa[R]=143>=R?8:255>=R?9:279>=R?7:8;C(xa);var za=new (m?Uint8Array:Array)(30),S,Aa;S=0;for(Aa=za.length;S<Aa;++S)za[S]=5;C(za);var N=8;function T(a,c){var b,e,d;if(a instanceof Element)e=a.width,d=a.height,b=a.getContext("2d"),this.data=b.getImageData(0,0,e,d).data;else if("number"===typeof a.length){if("object"!==typeof c)throw Error("need opt_param object");if("number"!==typeof c.width)throw Error("width property not found");if("number"!==typeof c.height)throw Error("height property not found");e=c.width;d=c.height;this.data=a}else throw Error("invalid arguments");this.bb(e,d,c)}
T.prototype.bb=function(a,c,b){"object"!==typeof b&&(b={});this.width=a;this.height=c;this.e="number"===typeof b.bitDepth?b.bitDepth:8;this.f="number"===typeof b.colourType?b.colourType:U;this.g="number"===typeof b.compressionMethod?b.compressionMethod:V;this.w="number"===typeof b.filterMethod?b.filterMethod:W;this.J="number"===typeof b.filterType?b.filterType:Ba;this.M="number"===typeof b.interlaceMethod?b.interlaceMethod:Ca;this.wa=!1;this.X=!0;this.t=b.deflateOption;this.q=null;this.s=[];this.B=
[];this.hb()};var Da=X("IHDR"),Ea=X("PLTE"),Fa=X("IDAT"),Ga=X("IEND"),Ha=X("tRNS"),Ia=X("gAMA"),Ja=X("cHRM"),Ka=X("sBIT"),La=X("sRGB"),Ma=X("iCCP"),Na=X("bKGD"),Oa=X("hIST"),Pa=X("pHYs"),Qa=X("sPLT"),Ra=X("tEXt"),Sa=X("zTXt"),Ta=X("iTXt"),Ua=X("tIME"),V=0,U=6,W=0,Ba=0,Ca=0,Va=[137,80,78,71,13,10,26,10],Wa=[{i:0,k:0,j:8,l:8},{i:4,k:0,j:8,l:8},{i:0,k:4,j:4,l:8},{i:2,k:0,j:4,l:4},{i:0,k:2,j:2,l:4},{i:1,k:0,j:2,l:2},{i:0,k:1,j:1,l:2}];
T.prototype.da=function(){for(var a=this.H(),c=[],b=0,e=a.length;b<e;b++)c[b]=String.fromCharCode(a[b]);return c.join("")};
T.prototype.H=function(){var a=[],c;c=this.R(this.data);Y(a,Va);Y(a,this.Ea());"object"===typeof this.G&&null!==this.G&&Y(a,this.Ia(this.G));"number"===typeof this.pa&&Y(a,this.Ja(this.pa));"object"===typeof this.L&&null!==this.L&&Y(a,this.La(this.L));this.$a instanceof Array&&Y(a,this.Oa(this.$a));"number"===typeof this.cb&&Y(a,this.Qa(this.cb));switch(this.f){case 3:Y(a,this.Ga(c.u));this.C=c.u;this.m instanceof Array&&Y(a,this.Ha(this.m,this.C));this.wa&&Y(a,this.Ka(this.B));this.X&&Y(a,this.Ta(c.eb));
break;case 0:case 2:case 4:case U:break;default:throw Error("unknown colour type");}"object"===typeof this.S&&null!==this.S&&Y(a,this.Na(this.S));"object"===typeof this.W&&null!==this.W&&Y(a,this.Pa(this.W,this.s));this.time instanceof Date&&Y(a,this.Sa(this.time));"object"===typeof this.text&&null!==this.text&&Y(a,this.Ra(this.text));"object"===typeof this.Y&&null!==this.Y&&Y(a,this.Ua(this.Y));"object"===typeof this.N&&null!==this.N&&Y(a,this.Ma(this.N));Y(a,this.Ca(c.$));Y(a,this.Da());return a};
T.prototype.lb=function(){return this.C instanceof Array?this.C:this.R(this.data).u.map(function(a){return a.split("").map(function(a){return a.charCodeAt(0)})})};T.prototype.hb=function(){var a,c,b,e=!1;switch(this.f){case 0:a=[1,2,4,8,16];break;case 3:a=[1,2,4,8];break;case 2:case 4:case U:a=[8,16];break;default:throw Error("invalid colour type");}c=0;for(b=a.length;c<b;c++)if(this.e===a[c]){e=!0;break}if(!1===e)throw Error("invalid parameter");};
T.prototype.Ea=function(){var a=[];Y(a,this.a(this.width,4));Y(a,this.a(this.height,4));Y(a,this.a(this.e,1));Y(a,this.a(this.f,1));Y(a,this.a(this.g,1));Y(a,this.a(this.w,1));Y(a,this.a(this.M,1));return this.c(Da,a)};
T.prototype.R=function(a){var c=[],b=this.X,e=this.e,d=[],f=[],g={},h={},k=[],p=0,l=0,o=0,i=0,t={},v=0,u=0,s,q,y;q=0;for(y=a.length;q<y;q+=4)s=b?this.V(this.n(a,q,4)):this.D(this.n(a,q,3)),g[s]=(g[s]|0)+1,p=a[q],l=a[q+1],o=a[q+2],i=a[q+3],v=((p<<8|l)<<8|o)<<8|i,void 0===t[v]&&(u=this.s.length,this.s.push({red:p,green:l,blue:o,alpha:i,count:0}),t[v]=u),this.s[t[v]].count++;p=0<(this.f&4);switch(this.f){case 4:case 0:q=0;for(y=a.length;q<y;q+=4)s=this.Za.apply(this,this.n(a,q,3)),i=a[q+3],8>e&&(s>>>=
8-e,i>>>=8-e),s=[s],p&&s.push(i),c.push(s);break;case 2:case U:q=0;for(y=a.length;q<y;q+=4)b=this.n(a,q,p?4:3),c.push(b);break;case 3:for(s in g)k.push(s);b&&k.sort(function(a,b){return a.charCodeAt(3)<b.charCodeAt(3)?-1:a.charCodeAt(3)>b.charCodeAt(3)?1:a.charCodeAt(0)<b.charCodeAt(0)?-1:a.charCodeAt(0)>b.charCodeAt(0)?1:a.charCodeAt(1)<b.charCodeAt(1)?-1:a.charCodeAt(1)>b.charCodeAt(1)?1:a.charCodeAt(2)<b.charCodeAt(2)?-1:a.charCodeAt(2)>b.charCodeAt(2)?1:0});q=0;for(y=k.length;q<y;q++)s=k[q],b?
(255!==s.charCodeAt(3)&&(f[q]=s.charCodeAt(3)),h[s]=q):h[s.slice(0,3)]=q,d.push(s.charCodeAt(0)),d.push(s.charCodeAt(1)),d.push(s.charCodeAt(2));if(this.m instanceof Array){if(3!==this.m.length)throw Error("wrong background-color length");if(!(this.D(this.m)in g)){if(d.length/3===1<<this.e)throw Error("can not add background-color to palette");d.push(this.m[0]);d.push(this.m[1]);d.push(this.m[2])}}if(d.length/3>1<<this.e)throw Error("over "+(1<<this.e)+" colors: "+d.length/3);q=0;for(y=d.length/3;q<
y;q++)this.B[q]=0;q=0;for(y=a.length;q<y;q+=4)s=b?this.V(this.n(a,q,4)):this.D(this.n(a,q,3)),this.B[h[s]]++,c.push([h[s]]);break;default:throw Error("invalid colour type");}return{u:d,eb:f,$:c}};T.prototype.Ia=function(a){var c=[];Y(c,this.a(1E4*a.rb|0,4));Y(c,this.a(1E4*a.sb|0,4));Y(c,this.a(1E4*a.ob|0,4));Y(c,this.a(1E4*a.pb|0,4));Y(c,this.a(1E4*a.mb|0,4));Y(c,this.a(1E4*a.nb|0,4));Y(c,this.a(1E4*a.jb|0,4));Y(c,this.a(1E4*a.kb|0,4));return this.c(Ja,c)};
T.prototype.Ja=function(a){return this.c(Ia,this.a(1E5/a+0.5|0,4))};
T.prototype.Oa=function(a){var c=[];switch(this.f){case 0:if(1!==a.length)throw Error("wrong sBIT length");Y(c,a.slice(0,1));break;case 2:if(3!==a.length)throw Error("wrong sBIT length");Y(c,a.slice(0,3));break;case 3:if(3!==a.length)throw Error("wrong sBIT length");Y(c,a.slice(0,3));break;case 4:if(2!==a.length)throw Error("wrong sBIT length");Y(c,a.slice(0,2));break;case U:if(4!==a.length)throw Error("wrong sBIT length");Y(c,a.slice(0,4));break;default:throw Error("unknown colour type");}return this.c(Ka,
c)};T.prototype.Qa=function(a){return this.c(La,[a])};T.prototype.La=function(a){var c=[],b,e,d;b=X(a.name);d=b.length;if(79<d)throw Error("ICCP Profile name is over 79 characters");for(e=0;e<d;e++)if(32>b[e]||126<b[e]&&161>b[e]||255<b[e])throw Error("wrong iccp profile name.");Y(c,b);c.push(0);c.push(a.g);switch(a.g){case V:Y(c,(new L(a.profile,this.t)).o());break;default:throw Error("unknown ICC Profile compression method");}return this.c(Ma,c)};
T.prototype.Ha=function(a,c){var b=[],e=null,d,f;switch(this.f){case 0:case 4:if(1!==a.length)throw Error("wrong background-color length");Y(b,this.a(a[0],2));break;case 2:case U:if(3!==a.length)throw Error("wrong background-color length");Y(b,this.a(a[0],2));Y(b,this.a(a[1],2));Y(b,this.a(a[2],2));break;case 3:if(3!==a.length)throw Error("wrong background-color length");d=0;for(f=c.length;d<f;d+=3)c[d+0]===a[0]&&(c[d+1]===a[1]&&c[d+2]===a[2])&&(e=d/3);if(null===e)return[];b.push(e);break;default:throw Error("unknown colour type");
}return this.c(Na,b)};T.prototype.Ka=function(a){for(var c=[],b,e=b=0,d=a.length;e<d;e++)b=b<a[e]||0===e?a[e]:b;for(var d=e=0,f=a.length;d<f;d++)e=a[d],e=0===e?0:65534*(e/b)+1.5|0,Y(c,this.a(e,2));return this.c(Oa,c)};
T.prototype.Pa=function(a,c){var b=[],e,d=0,f=0,g=0>a.Va?c.length:a.Va,h=0;if(0===g)return[];Y(b,X(a.name));b.push(0);switch(this.e){case 16:b.push(16);break;case 8:case 4:case 2:case 1:b.push(8);break;default:throw Error("invalid bit depth");}e=c.sort(function(a,b){return a.count<b.count?1:a.count>b.count?-1:0});for(d=e[0].count;f<g;f++){c=e[f];switch(this.e){case 16:Y(b,this.a(c.red<<8|c.red,2));Y(b,this.a(c.green<<8|c.green,2));Y(b,this.a(c.blue<<8|c.blue,2));Y(b,this.a(c.alpha<<8|c.alpha,2));
break;case 8:case 4:case 2:case 1:b.push(c.red);b.push(c.green);b.push(c.blue);b.push(c.alpha);break;default:throw Error("invalid bit depth");}h=65535*(c.count/d)+0.5|0;Y(b,this.a(h,2))}return this.c(Qa,b)};T.prototype.Ga=function(a){if(256<a.length/3)throw Error("over 256 colors: "+a.length/3);return this.c(Ea,a)};T.prototype.Na=function(a){var c=[];Y(c,this.a(a.x,4));Y(c,this.a(a.y,4));c.push(a.qb);return this.c(Pa,c)};
T.prototype.Ra=function(a){var c=[];Y(c,X(a.O));c.push(0);Y(c,X(a.text));return this.c(Ra,c)};T.prototype.Ua=function(a){var c=[];Y(c,X(a.O));c.push(0);c.push(a.g);switch(a.g){case V:Y(c,(new L(X(a.text),this.t)).o());break;default:throw Error("unknown compression method");}return this.c(Sa,c)};
T.prototype.Ma=function(a){var c=[],b;Y(c,X(a.O));c.push(0);if("number"===typeof a.g)switch(c.push(1),c.push(a.g),a.g){case V:b=(new L(X(unescape(encodeURIComponent(a.text))),this.t)).o();break;default:throw Error("unknown compression method");}else c.push(0),c.push(0),b=X(unescape(encodeURIComponent(a.text)));Y(c,X(a.lang));c.push(0);"string"===typeof a.gb&&Y(c,X(unescape(encodeURIComponent(a.gb))));c.push(0);Y(c,b);return this.c(Ta,c)};
T.prototype.Sa=function(a){var c=[];Y(c,this.a(a.getUTCFullYear(),2));c.push(a.getUTCMonth()+1);c.push(a.getUTCDate());c.push(a.getUTCHours());c.push(a.getUTCMinutes());c.push(a.getUTCSeconds());return this.c(Ua,c)};
T.prototype.Ca=function(a){var c=[],b=this.w,e=this.J,d,f,g,h,k,p,l,o;this.za=this.ua();this.ka=this.ta();k=this.qa();p=this.za(a);l=0;for(o=p.length;l<o;l++)if(g=p[l],a=g.T,0!==a.length){d=g.width;this.q=null;f=0;for(g=g.height;f<g;f++){h=this.n(a,f*d,d);h=this.Xa(h);switch(b){case W:c.push(e);Y(c,this.ka(h,k));break;default:throw Error("unknown filter method");}this.q=h}}switch(this.g){case V:c=(new L(c,this.t)).o();break;default:throw Error("unknown compression method");}return this.c(Fa,c)};
T.prototype.Da=function(){return this.c(Ga,[])};T.prototype.Ta=function(a){var c=[];switch(this.f){case 0:Y(c,this.a(a[0],2));break;case 2:Y(c,this.a(a[0],2));Y(c,this.a(a[1],2));Y(c,this.a(a[2],2));break;case 3:c=a;break;default:throw Error("invalid colour type");}return this.c(Ha,c)};
T.prototype.qa=function(){var a,c=0<(this.f&4);switch(this.f){case 3:a=1;break;case 0:case 4:a=1;c&&(a+=1);16===this.e&&(a*=2);break;case 2:case U:a=3;c&&(a+=1);16===this.e&&(a*=2);break;default:throw Error("unknown colour type");}return a};T.prototype.ua=function(){var a;switch(this.M){case Ca:a=this.ya;break;case 1:a=this.xa;break;default:throw Error("unknown interlace method");}return a};function Z(a,c,b){this.width=a;this.height=c;this.T=b}
T.prototype.ya=function(a){return[new Z(this.width,this.height,a)]};T.prototype.xa=function(a){var c=this.height,b=a.length/c,e,d,f,g,h,k,p,l,o,i,t,v;t=[new Z(0,0,[]),new Z(0,0,[]),new Z(0,0,[]),new Z(0,0,[]),new Z(0,0,[]),new Z(0,0,[]),new Z(0,0,[])];l=0;for(o=Wa.length;l<o;l++){v=t[l];i=Wa[l];for(d=h=k=0;d<c;d+=8)for(g=i.k;8>g;g+=i.l)for(e=0;e<b;e+=8)for(f=i.i;8>f;f+=i.j)if(p=a[e+f+(d+g)*b])h=(e+f-i.i)/i.j,k=(d+g-i.k)/i.l,v.T.push(p);v.width=h+1;v.height=k+1}return t};
T.prototype.Xa=function(a){var c=[],b,e,d,f,g,h,k=this.e,p,l;p=8/k;d=0;for(f=a.length;d<f;d++)if(b=a[d],8>k)0===d%p&&(l=d/p,c[l]=0),c[l]|=b[0]<<(p-d%p-1)*k;else{g=0;for(h=b.length;g<h;g++)e=b[g],c.push(e),16===k&&c.push(e)}return c};
T.prototype.ta=function(){var a;switch(this.w){case W:switch(this.J){case Ba:a=this.ga;break;case 1:a=this.ia;break;case 2:a=this.ja;break;case 3:a=this.fa;break;case 4:a=this.ha;break;default:throw Error("unknown filter type");}break;default:throw Error("unknown filter method");}return a};T.prototype.ga=function(a){return a};T.prototype.ia=function(a,c){var b=[],e=0,d,f;d=0;for(f=a.length;d<f;d++)e=a[d-c]||0,b.push(a[d]-e+256&255);return b};
T.prototype.ja=function(a){var c=[],b,e=this.q,d,f;d=0;for(f=a.length;d<f;d++)b=e&&e[d]?e[d]:0,c.push(a[d]-b+256&255);return c};T.prototype.fa=function(a,c){var b=[],e,d,f=this.q,g,h;g=0;for(h=a.length;g<h;g++)e=a[g-c]||0,d=f&&f[g]||0,e=e+d>>>1,b.push(a[g]+256-e&255);return b};T.prototype.ha=function(a,c){var b=[],e,d,f,g=this.q,h,k;h=0;for(k=a.length;h<k;h++)e=a[h-c]||0,d=g&&g[h]||0,f=g&&g[h-c]||0,e=this.Wa(e,d,f),b.push(a[h]-e+256&255);return b};
T.prototype.Wa=function(a,c,b){var e,d,f;e=a+c-b;d=Math.abs(e-a);f=Math.abs(e-c);e=Math.abs(e-b);return d<=f&&d<=e?a:f<=e?c:b};T.prototype.n=function(a,c,b){return"function"===typeof a.slice?a.slice(c,c+b):Array.prototype.slice.call(a,c,c+b)};T.prototype.c=function(a,c){var b=[],e=[];Y(b,this.a(c.length,4));Y(b,a);Y(b,c);Y(e,a);Y(e,c);Y(b,this.a(A.ca(e),4));return b};T.prototype.a=function(a,c){var b=[],e;do e=a&255,b.push(e),a>>>=8;while(0<a);if("number"===typeof c)for(;b.length<c;)b.push(0);return b.reverse()};
T.prototype.Za=function(a,c,b){a=0.29891*a+0.58661*c+0.11448*b+1.0E-4;return(255<a?255:a)|0};T.prototype.D=function(a){return a.slice(0,3).map(this.K).join("")};T.prototype.V=function(a){return a.map(this.K).join("")};T.prototype.K=function(a){return String.fromCharCode(a).charAt(0)};function Y(a,c){var b=0,e=c.length,d=c.length;if(a.push)for(;b<d;b++)a.push(c[b]);else for(;b<d;b++)a[e+b]=c[b];return a.length}
function X(a){var a=a.split(""),c=[],b,e;b=0;for(e=a.length;b<e;b++)c[b]=a[b].charCodeAt(0);return c}function $(a,c){for(var b in c){var e=[a,b].join(".");j(e,c[b],void 0)}}j("CanvasTool.PngEncoder",T,void 0);$("CanvasTool.PngEncoder.CompressionMethod",{DEFLATE:V});$("CanvasTool.PngEncoder.ColourType",{GRAYSCALE:0,TRUECOLOR:2,INDEXED_COLOR:3,GRAYSCALE_WITH_ALPHA:4,TRUECOLOR_WITH_ALPHA:U});$("CanvasTool.PngEncoder.FilterMethod",{BASIC:W});
$("CanvasTool.PngEncoder.BasicFilterType",{NONE:Ba,SUB:1,UP:2,AVERAGE:3,PAETH:4});$("CanvasTool.PngEncoder.InterlaceMethod",{NONE:Ca,ADAM7:1});j("CanvasTool.PngEncoder.prototype.convert",T.prototype.da,void 0);j("CanvasTool.PngEncoder.prototype.convertToArray",T.prototype.H,void 0);}).call(this);

/*
* Copyright (c) 2015, Leon Sorokin
* All rights reserved. (MIT Licensed)
*
* RgbQuant.js - an image quantization lib
*/

(function(){
	function RgbQuant(opts) {
		opts = opts || {};

		// 1 = by global population, 2 = subregion population threshold
		this.method = opts.method || 2;
		// desired final palette size
		this.colors = opts.colors || 256;
		// # of highest-frequency colors to start with for palette reduction
		this.initColors = opts.initColors || 4096;
		// color-distance threshold for initial reduction pass
		this.initDist = opts.initDist || 0.01;
		// subsequent passes threshold
		this.distIncr = opts.distIncr || 0.005;
		// palette grouping
		this.hueGroups = opts.hueGroups || 10;
		this.satGroups = opts.satGroups || 10;
		this.lumGroups = opts.lumGroups || 10;
		// if > 0, enables hues stats and min-color retention per group
		this.minHueCols = opts.minHueCols || 0;
		// HueStats instance
		this.hueStats = this.minHueCols ? new HueStats(this.hueGroups, this.minHueCols) : null;

		// subregion partitioning box size
		this.boxSize = opts.boxSize || [64,64];
		// number of same pixels required within box for histogram inclusion
		this.boxPxls = opts.boxPxls || 2;
		// palette locked indicator
		this.palLocked = false;
		// palette sort order
//		this.sortPal = ['hue-','lum-','sat-'];

		// dithering/error diffusion kernel name
		this.dithKern = opts.dithKern || null;
		// dither serpentine pattern
		this.dithSerp = opts.dithSerp || false;
		// minimum color difference (0-1) needed to dither
		this.dithDelta = opts.dithDelta || 0;

		// accumulated histogram
		this.histogram = {};
		// palette - rgb triplets
		this.idxrgb = opts.palette ? opts.palette.slice(0) : [];
		// palette - int32 vals
		this.idxi32 = [];
		// reverse lookup {i32:idx}
		this.i32idx = {};
		// {i32:rgb}
		this.i32rgb = {};
		// enable color caching (also incurs overhead of cache misses and cache building)
		this.useCache = opts.useCache !== false;
		// min color occurance count needed to qualify for caching
		this.cacheFreq = opts.cacheFreq || 10;
		// allows pre-defined palettes to be re-indexed (enabling palette compacting and sorting)
		this.reIndex = opts.reIndex || this.idxrgb.length == 0;
		// selection of color-distance equation
		this.colorDist = opts.colorDist == "manhattan" ? distManhattan : distEuclidean;

		// if pre-defined palette, build lookups
		if (this.idxrgb.length > 0) {
			var self = this;
			this.idxrgb.forEach(function(rgb, i) {
				var i32 = (
					(255    << 24) |	// alpha
					(rgb[2] << 16) |	// blue
					(rgb[1] <<  8) |	// green
					 rgb[0]				// red
				) >>> 0;

				self.idxi32[i]		= i32;
				self.i32idx[i32]	= i;
				self.i32rgb[i32]	= rgb;
			});
		}
	}

	// gathers histogram info
	RgbQuant.prototype.sample = function sample(img, width) {
		if (this.palLocked)
			throw "Cannot sample additional images, palette already assembled.";

		var data = getImageData(img, width);

		switch (this.method) {
			case 1: this.colorStats1D(data.buf32); break;
			case 2: this.colorStats2D(data.buf32, data.width); break;
		}
	};

	// image quantizer
	// todo: memoize colors here also
	// @retType: 1 - Uint8Array (default), 2 - Indexed array, 3 - Match @img type (unimplemented, todo)
	RgbQuant.prototype.reduce = function reduce(img, retType, dithKern, dithSerp) {
		if (!this.palLocked)
			this.buildPal();

		dithKern = dithKern || this.dithKern;
		dithSerp = typeof dithSerp != "undefined" ? dithSerp : this.dithSerp;

		retType = retType || 1;

		// reduce w/dither
		if (dithKern)
			var out32 = this.dither(img, dithKern, dithSerp);
		else {
			var data = getImageData(img),
				buf32 = data.buf32,
				len = buf32.length,
				out32 = new Uint32Array(len);

			for (var i = 0; i < len; i++) {
				var i32 = buf32[i];
				out32[i] = this.nearestColor(i32);
			}
		}

		if (retType == 1)
			return new Uint8Array(out32.buffer);

		if (retType == 2) {
			var out = [],
				len = out32.length;

			for (var i = 0; i < len; i++) {
				var i32 = out32[i];
				out[i] = this.i32idx[i32];
			}

			return out;
		}
	};

	// adapted from http://jsbin.com/iXofIji/2/edit by PAEz
	RgbQuant.prototype.dither = function(img, kernel, serpentine) {
		// http://www.tannerhelland.com/4660/dithering-eleven-algorithms-source-code/
		var kernels = {
			FloydSteinberg: [
				[7 / 16, 1, 0],
				[3 / 16, -1, 1],
				[5 / 16, 0, 1],
				[1 / 16, 1, 1]
			],
			FalseFloydSteinberg: [
				[3 / 8, 1, 0],
				[3 / 8, 0, 1],
				[2 / 8, 1, 1]
			],
			Stucki: [
				[8 / 42, 1, 0],
				[4 / 42, 2, 0],
				[2 / 42, -2, 1],
				[4 / 42, -1, 1],
				[8 / 42, 0, 1],
				[4 / 42, 1, 1],
				[2 / 42, 2, 1],
				[1 / 42, -2, 2],
				[2 / 42, -1, 2],
				[4 / 42, 0, 2],
				[2 / 42, 1, 2],
				[1 / 42, 2, 2]
			],
			Atkinson: [
				[1 / 8, 1, 0],
				[1 / 8, 2, 0],
				[1 / 8, -1, 1],
				[1 / 8, 0, 1],
				[1 / 8, 1, 1],
				[1 / 8, 0, 2]
			],
			Jarvis: [			// Jarvis, Judice, and Ninke / JJN?
				[7 / 48, 1, 0],
				[5 / 48, 2, 0],
				[3 / 48, -2, 1],
				[5 / 48, -1, 1],
				[7 / 48, 0, 1],
				[5 / 48, 1, 1],
				[3 / 48, 2, 1],
				[1 / 48, -2, 2],
				[3 / 48, -1, 2],
				[5 / 48, 0, 2],
				[3 / 48, 1, 2],
				[1 / 48, 2, 2]
			],
			Burkes: [
				[8 / 32, 1, 0],
				[4 / 32, 2, 0],
				[2 / 32, -2, 1],
				[4 / 32, -1, 1],
				[8 / 32, 0, 1],
				[4 / 32, 1, 1],
				[2 / 32, 2, 1],
			],
			Sierra: [
				[5 / 32, 1, 0],
				[3 / 32, 2, 0],
				[2 / 32, -2, 1],
				[4 / 32, -1, 1],
				[5 / 32, 0, 1],
				[4 / 32, 1, 1],
				[2 / 32, 2, 1],
				[2 / 32, -1, 2],
				[3 / 32, 0, 2],
				[2 / 32, 1, 2],
			],
			TwoSierra: [
				[4 / 16, 1, 0],
				[3 / 16, 2, 0],
				[1 / 16, -2, 1],
				[2 / 16, -1, 1],
				[3 / 16, 0, 1],
				[2 / 16, 1, 1],
				[1 / 16, 2, 1],
			],
			SierraLite: [
				[2 / 4, 1, 0],
				[1 / 4, -1, 1],
				[1 / 4, 0, 1],
			],
		};

		if (!kernel || !kernels[kernel]) {
			throw 'Unknown dithering kernel: ' + kernel;
		}

		var ds = kernels[kernel];

		var data = getImageData(img),
//			buf8 = data.buf8,
			buf32 = data.buf32,
			width = data.width,
			height = data.height,
			len = buf32.length;

		var dir = serpentine ? -1 : 1;

		for (var y = 0; y < height; y++) {
			if (serpentine)
				dir = dir * -1;

			var lni = y * width;

			for (var x = (dir == 1 ? 0 : width - 1), xend = (dir == 1 ? width : 0); x !== xend; x += dir) {
				// Image pixel
				var idx = lni + x,
					i32 = buf32[idx],
					r1 = (i32 & 0xff),
					g1 = (i32 & 0xff00) >> 8,
					b1 = (i32 & 0xff0000) >> 16;

				// Reduced pixel
				var i32x = this.nearestColor(i32),
					r2 = (i32x & 0xff),
					g2 = (i32x & 0xff00) >> 8,
					b2 = (i32x & 0xff0000) >> 16;

				buf32[idx] =
					(255 << 24)	|	// alpha
					(b2  << 16)	|	// blue
					(g2  <<  8)	|	// green
					 r2;

				// dithering strength
				if (this.dithDelta) {
					var dist = this.colorDist([r1, g1, b1], [r2, g2, b2]);
					if (dist < this.dithDelta)
						continue;
				}

				// Component distance
				var er = r1 - r2,
					eg = g1 - g2,
					eb = b1 - b2;

				for (var i = (dir == 1 ? 0 : ds.length - 1), end = (dir == 1 ? ds.length : 0); i !== end; i += dir) {
					var x1 = ds[i][1] * dir,
						y1 = ds[i][2];

					var lni2 = y1 * width;

					if (x1 + x >= 0 && x1 + x < width && y1 + y >= 0 && y1 + y < height) {
						var d = ds[i][0];
						var idx2 = idx + (lni2 + x1);

						var r3 = (buf32[idx2] & 0xff),
							g3 = (buf32[idx2] & 0xff00) >> 8,
							b3 = (buf32[idx2] & 0xff0000) >> 16;

						var r4 = Math.max(0, Math.min(255, r3 + er * d)),
							g4 = Math.max(0, Math.min(255, g3 + eg * d)),
							b4 = Math.max(0, Math.min(255, b3 + eb * d));

						buf32[idx2] =
							(255 << 24)	|	// alpha
							(b4  << 16)	|	// blue
							(g4  <<  8)	|	// green
							 r4;			// red
					}
				}
			}
		}

		return buf32;
	};

	// reduces histogram to palette, remaps & memoizes reduced colors
	RgbQuant.prototype.buildPal = function buildPal(noSort) {
		if (this.palLocked || this.idxrgb.length > 0 && this.idxrgb.length <= this.colors) return;

		var histG  = this.histogram,
			sorted = sortedHashKeys(histG, true);

		if (sorted.length == 0)
			throw "Nothing has been sampled, palette cannot be built.";

		switch (this.method) {
			case 1:
				var cols = this.initColors,
					last = sorted[cols - 1],
					freq = histG[last];

				var idxi32 = sorted.slice(0, cols);

				// add any cut off colors with same freq as last
				var pos = cols, len = sorted.length;
				while (pos < len && histG[sorted[pos]] == freq)
					idxi32.push(sorted[pos++]);

				// inject min huegroup colors
				if (this.hueStats)
					this.hueStats.inject(idxi32);

				break;
			case 2:
				var idxi32 = sorted;
				break;
		}

		// int32-ify values
		idxi32 = idxi32.map(function(v){return +v;});

		this.reducePal(idxi32);

		if (!noSort && this.reIndex)
			this.sortPal();

		// build cache of top histogram colors
		if (this.useCache)
			this.cacheHistogram(idxi32);

		this.palLocked = true;
	};

	RgbQuant.prototype.palette = function palette(tuples, noSort) {
		this.buildPal(noSort);
		return tuples ? this.idxrgb : new Uint8Array((new Uint32Array(this.idxi32)).buffer);
	};

	RgbQuant.prototype.prunePal = function prunePal(keep) {
		var i32;

		for (var j = 0; j < this.idxrgb.length; j++) {
			if (!keep[j]) {
				i32 = this.idxi32[j];
				this.idxrgb[j] = null;
				this.idxi32[j] = null;
				delete this.i32idx[i32];
			}
		}

		// compact
		if (this.reIndex) {
			var idxrgb = [],
				idxi32 = [],
				i32idx = {};

			for (var j = 0, i = 0; j < this.idxrgb.length; j++) {
				if (this.idxrgb[j]) {
					i32 = this.idxi32[j];
					idxrgb[i] = this.idxrgb[j];
					i32idx[i32] = i;
					idxi32[i] = i32;
					i++;
				}
			}

			this.idxrgb = idxrgb;
			this.idxi32 = idxi32;
			this.i32idx = i32idx;
		}
	};

	// reduces similar colors from an importance-sorted Uint32 rgba array
	RgbQuant.prototype.reducePal = function reducePal(idxi32) {
		// if pre-defined palette's length exceeds target
		if (this.idxrgb.length > this.colors) {
			// quantize histogram to existing palette
			var len = idxi32.length, keep = {}, uniques = 0, idx, pruned = false;

			for (var i = 0; i < len; i++) {
				// palette length reached, unset all remaining colors (sparse palette)
				if (uniques == this.colors && !pruned) {
					this.prunePal(keep);
					pruned = true;
				}

				idx = this.nearestIndex(idxi32[i]);

				if (uniques < this.colors && !keep[idx]) {
					keep[idx] = true;
					uniques++;
				}
			}

			if (!pruned) {
				this.prunePal(keep);
				pruned = true;
			}
		}
		// reduce histogram to create initial palette
		else {
			// build full rgb palette
			var idxrgb = idxi32.map(function(i32) {
				return [
					(i32 & 0xff),
					(i32 & 0xff00) >> 8,
					(i32 & 0xff0000) >> 16,
				];
			});

			var len = idxrgb.length,
				palLen = len,
				thold = this.initDist;

			// palette already at or below desired length
			if (palLen > this.colors) {
				while (palLen > this.colors) {
					var memDist = [];

					// iterate palette
					for (var i = 0; i < len; i++) {
						var pxi = idxrgb[i], i32i = idxi32[i];
						if (!pxi) continue;

						for (var j = i + 1; j < len; j++) {
							var pxj = idxrgb[j], i32j = idxi32[j];
							if (!pxj) continue;

							var dist = this.colorDist(pxi, pxj);

							if (dist < thold) {
								// store index,rgb,dist
								memDist.push([j, pxj, i32j, dist]);

								// kill squashed value
								delete(idxrgb[j]);
								palLen--;
							}
						}
					}

					// palette reduction pass
					// console.log("palette length: " + palLen);

					// if palette is still much larger than target, increment by larger initDist
					thold += (palLen > this.colors * 3) ? this.initDist : this.distIncr;
				}

				// if palette is over-reduced, re-add removed colors with largest distances from last round
				if (palLen < this.colors) {
					// sort descending
					sort.call(memDist, function(a,b) {
						return b[3] - a[3];
					});

					var k = 0;
					while (palLen < this.colors) {
						// re-inject rgb into final palette
						idxrgb[memDist[k][0]] = memDist[k][1];

						palLen++;
						k++;
					}
				}
			}

			var len = idxrgb.length;
			for (var i = 0; i < len; i++) {
				if (!idxrgb[i]) continue;

				this.idxrgb.push(idxrgb[i]);
				this.idxi32.push(idxi32[i]);

				this.i32idx[idxi32[i]] = this.idxi32.length - 1;
				this.i32rgb[idxi32[i]] = idxrgb[i];
			}
		}
	};

	// global top-population
	RgbQuant.prototype.colorStats1D = function colorStats1D(buf32) {
		var histG = this.histogram,
			num = 0, col,
			len = buf32.length;

		for (var i = 0; i < len; i++) {
			col = buf32[i];

			// skip transparent
			if ((col & 0xff000000) >> 24 == 0) continue;

			// collect hue stats
			if (this.hueStats)
				this.hueStats.check(col);

			if (col in histG)
				histG[col]++;
			else
				histG[col] = 1;
		}
	};

	// population threshold within subregions
	// FIXME: this can over-reduce (few/no colors same?), need a way to keep
	// important colors that dont ever reach local thresholds (gradients?)
	RgbQuant.prototype.colorStats2D = function colorStats2D(buf32, width) {
		var boxW = this.boxSize[0],
			boxH = this.boxSize[1],
			area = boxW * boxH,
			boxes = makeBoxes(width, buf32.length / width, boxW, boxH),
			histG = this.histogram,
			self = this;

		boxes.forEach(function(box) {
			var effc = Math.max(Math.round((box.w * box.h) / area) * self.boxPxls, 2),
				histL = {}, col;

			iterBox(box, width, function(i) {
				col = buf32[i];

				// skip transparent
				if ((col & 0xff000000) >> 24 == 0) return;

				// collect hue stats
				if (self.hueStats)
					self.hueStats.check(col);

				if (col in histG)
					histG[col]++;
				else if (col in histL) {
					if (++histL[col] >= effc)
						histG[col] = histL[col];
				}
				else
					histL[col] = 1;
			});
		});

		if (this.hueStats)
			this.hueStats.inject(histG);
	};

	// TODO: group very low lum and very high lum colors
	// TODO: pass custom sort order
	RgbQuant.prototype.sortPal = function sortPal() {
		var self = this;

		this.idxi32.sort(function(a,b) {
			var idxA = self.i32idx[a],
				idxB = self.i32idx[b],
				rgbA = self.idxrgb[idxA],
				rgbB = self.idxrgb[idxB];

			var hslA = rgb2hsl(rgbA[0],rgbA[1],rgbA[2]),
				hslB = rgb2hsl(rgbB[0],rgbB[1],rgbB[2]);

			// sort all grays + whites together
			var hueA = (rgbA[0] == rgbA[1] && rgbA[1] == rgbA[2]) ? -1 : hueGroup(hslA.h, self.hueGroups);
			var hueB = (rgbB[0] == rgbB[1] && rgbB[1] == rgbB[2]) ? -1 : hueGroup(hslB.h, self.hueGroups);

			var hueDiff = hueB - hueA;
			if (hueDiff) return -hueDiff;

			var lumDiff = lumGroup(+hslB.l.toFixed(2)) - lumGroup(+hslA.l.toFixed(2));
			if (lumDiff) return -lumDiff;

			var satDiff = satGroup(+hslB.s.toFixed(2)) - satGroup(+hslA.s.toFixed(2));
			if (satDiff) return -satDiff;
		});

		// sync idxrgb & i32idx
		this.idxi32.forEach(function(i32, i) {
			self.idxrgb[i] = self.i32rgb[i32];
			self.i32idx[i32] = i;
		});
	};

	// TOTRY: use HUSL - http://boronine.com/husl/
	RgbQuant.prototype.nearestColor = function nearestColor(i32) {
		var idx = this.nearestIndex(i32);
		return idx === null ? 0 : this.idxi32[idx];
	};

	// TOTRY: use HUSL - http://boronine.com/husl/
	RgbQuant.prototype.nearestIndex = function nearestIndex(i32) {
		// alpha 0 returns null index
		if ((i32 & 0xff000000) >> 24 == 0)
			return null;

		if (this.useCache && (""+i32) in this.i32idx)
			return this.i32idx[i32];

		var min = 1000,
			idx,
			rgb = [
				(i32 & 0xff),
				(i32 & 0xff00) >> 8,
				(i32 & 0xff0000) >> 16,
			],
			len = this.idxrgb.length;

		for (var i = 0; i < len; i++) {
			if (!this.idxrgb[i]) continue;		// sparse palettes

			var dist = this.colorDist(rgb, this.idxrgb[i]);

			if (dist < min) {
				min = dist;
				idx = i;
			}
		}

		return idx;
	};

	RgbQuant.prototype.cacheHistogram = function cacheHistogram(idxi32) {
		for (var i = 0, i32 = idxi32[i]; i < idxi32.length && this.histogram[i32] >= this.cacheFreq; i32 = idxi32[i++])
			this.i32idx[i32] = this.nearestIndex(i32);
	};

	function HueStats(numGroups, minCols) {
		this.numGroups = numGroups;
		this.minCols = minCols;
		this.stats = {};

		for (var i = -1; i < numGroups; i++)
			this.stats[i] = {num: 0, cols: []};

		this.groupsFull = 0;
	}

	HueStats.prototype.check = function checkHue(i32) {
		if (this.groupsFull == this.numGroups + 1)
			this.check = function() {return;};

		var r = (i32 & 0xff),
			g = (i32 & 0xff00) >> 8,
			b = (i32 & 0xff0000) >> 16,
			hg = (r == g && g == b) ? -1 : hueGroup(rgb2hsl(r,g,b).h, this.numGroups),
			gr = this.stats[hg],
			min = this.minCols;

		gr.num++;

		if (gr.num > min)
			return;
		if (gr.num == min)
			this.groupsFull++;

		if (gr.num <= min)
			this.stats[hg].cols.push(i32);
	};

	HueStats.prototype.inject = function injectHues(histG) {
		for (var i = -1; i < this.numGroups; i++) {
			if (this.stats[i].num <= this.minCols) {
				switch (typeOf(histG)) {
					case "Array":
						this.stats[i].cols.forEach(function(col){
							if (histG.indexOf(col) == -1)
								histG.push(col);
						});
						break;
					case "Object":
						this.stats[i].cols.forEach(function(col){
							if (!histG[col])
								histG[col] = 1;
							else
								histG[col]++;
						});
						break;
				}
			}
		}
	};

	// Rec. 709 (sRGB) luma coef
	var Pr = .2126,
		Pg = .7152,
		Pb = .0722;

	// http://alienryderflex.com/hsp.html
	function rgb2lum(r,g,b) {
		return Math.sqrt(
			Pr * r*r +
			Pg * g*g +
			Pb * b*b
		);
	}

	var rd = 255,
		gd = 255,
		bd = 255;

	var euclMax = Math.sqrt(Pr*rd*rd + Pg*gd*gd + Pb*bd*bd);
	// perceptual Euclidean color distance
	function distEuclidean(rgb0, rgb1) {
		var rd = rgb1[0]-rgb0[0],
			gd = rgb1[1]-rgb0[1],
			bd = rgb1[2]-rgb0[2];

		return Math.sqrt(Pr*rd*rd + Pg*gd*gd + Pb*bd*bd) / euclMax;
	}

	var manhMax = Pr*rd + Pg*gd + Pb*bd;
	// perceptual Manhattan color distance
	function distManhattan(rgb0, rgb1) {
		var rd = Math.abs(rgb1[0]-rgb0[0]),
			gd = Math.abs(rgb1[1]-rgb0[1]),
			bd = Math.abs(rgb1[2]-rgb0[2]);

		return (Pr*rd + Pg*gd + Pb*bd) / manhMax;
	}

	// http://rgb2hsl.nichabi.com/javascript-function.php
	function rgb2hsl(r, g, b) {
		var max, min, h, s, l, d;
		r /= 255;
		g /= 255;
		b /= 255;
		max = Math.max(r, g, b);
		min = Math.min(r, g, b);
		l = (max + min) / 2;
		if (max == min) {
			h = s = 0;
		} else {
			d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
				case r: h = (g - b) / d + (g < b ? 6 : 0); break;
				case g:	h = (b - r) / d + 2; break;
				case b:	h = (r - g) / d + 4; break
			}
			h /= 6;
		}
//		h = Math.floor(h * 360)
//		s = Math.floor(s * 100)
//		l = Math.floor(l * 100)
		return {
			h: h,
			s: s,
			l: rgb2lum(r,g,b),
		};
	}

	function hueGroup(hue, segs) {
		var seg = 1/segs,
			haf = seg/2;

		if (hue >= 1 - haf || hue <= haf)
			return 0;

		for (var i = 1; i < segs; i++) {
			var mid = i*seg;
			if (hue >= mid - haf && hue <= mid + haf)
				return i;
		}
	}

	function satGroup(sat) {
		return sat;
	}

	function lumGroup(lum) {
		return lum;
	}

	function typeOf(val) {
		return Object.prototype.toString.call(val).slice(8,-1);
	}

	var sort = isArrSortStable() ? Array.prototype.sort : stableSort;

	// must be used via stableSort.call(arr, fn)
	function stableSort(fn) {
		var type = typeOf(this[0]);

		if (type == "Number" || type == "String") {
			var ord = {}, len = this.length, val;

			for (var i = 0; i < len; i++) {
				val = this[i];
				if (ord[val] || ord[val] === 0) continue;
				ord[val] = i;
			}

			return this.sort(function(a,b) {
				return fn(a,b) || ord[a] - ord[b];
			});
		}
		else {
			var ord = this.map(function(v){return v});

			return this.sort(function(a,b) {
				return fn(a,b) || ord.indexOf(a) - ord.indexOf(b);
			});
		}
	}

	// test if js engine's Array#sort implementation is stable
	function isArrSortStable() {
		var str = "abcdefghijklmnopqrstuvwxyz";

		return "xyzvwtursopqmnklhijfgdeabc" == str.split("").sort(function(a,b) {
			return ~~(str.indexOf(b)/2.3) - ~~(str.indexOf(a)/2.3);
		}).join("");
	}

	// returns uniform pixel data from various img
	// TODO?: if array is passed, createimagedata, createlement canvas? take a pxlen?
	function getImageData(img, width) {
		var can, ctx, imgd, buf8, buf32, height;

		switch (typeOf(img)) {
			case "HTMLImageElement":
				can = document.createElement("canvas");
				can.width = img.naturalWidth;
				can.height = img.naturalHeight;
				ctx = can.getContext("2d");
				ctx.drawImage(img,0,0);
			case "Canvas":
			case "HTMLCanvasElement":
				can = can || img;
				ctx = ctx || can.getContext("2d");
			case "CanvasRenderingContext2D":
				ctx = ctx || img;
				can = can || ctx.canvas;
				imgd = ctx.getImageData(0, 0, can.width, can.height);
			case "ImageData":
				imgd = imgd || img;
				width = imgd.width;
				if (typeOf(imgd.data) == "CanvasPixelArray")
					buf8 = new Uint8Array(imgd.data);
				else
					buf8 = imgd.data;
			case "Array":
			case "CanvasPixelArray":
				buf8 = buf8 || new Uint8Array(img);
			case "Uint8Array":
			case "Uint8ClampedArray":
				buf8 = buf8 || img;
				buf32 = new Uint32Array(buf8.buffer);
			case "Uint32Array":
				buf32 = buf32 || img;
				buf8 = buf8 || new Uint8Array(buf32.buffer);
				width = width || buf32.length;
				height = buf32.length / width;
		}

		return {
			can: can,
			ctx: ctx,
			imgd: imgd,
			buf8: buf8,
			buf32: buf32,
			width: width,
			height: height,
		};
	}

	// partitions a rect of wid x hgt into
	// array of bboxes of w0 x h0 (or less)
	function makeBoxes(wid, hgt, w0, h0) {
		var wnum = ~~(wid/w0), wrem = wid%w0,
			hnum = ~~(hgt/h0), hrem = hgt%h0,
			xend = wid-wrem, yend = hgt-hrem;

		var bxs = [];
		for (var y = 0; y < hgt; y += h0)
			for (var x = 0; x < wid; x += w0)
				bxs.push({x:x, y:y, w:(x==xend?wrem:w0), h:(y==yend?hrem:h0)});

		return bxs;
	}

	// iterates @bbox within a parent rect of width @wid; calls @fn, passing index within parent
	function iterBox(bbox, wid, fn) {
		var b = bbox,
			i0 = b.y * wid + b.x,
			i1 = (b.y + b.h - 1) * wid + (b.x + b.w - 1),
			cnt = 0, incr = wid - b.w + 1, i = i0;

		do {
			fn.call(this, i);
			i += (++cnt % b.w == 0) ? incr : 1;
		} while (i <= i1);
	}

	// returns array of hash keys sorted by their values
	function sortedHashKeys(obj, desc) {
		var keys = [];

		for (var key in obj)
			keys.push(key);

		return sort.call(keys, function(a,b) {
			return desc ? obj[b] - obj[a] : obj[a] - obj[b];
		});
	}

	// expose
	this.RgbQuant = RgbQuant;

	// expose to commonJS
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = RgbQuant;
	}

}).call(this);

function drawPixels(idxi8, width0, width1) {
	var idxi32 = new Uint32Array(idxi8.buffer);

	width1 = width1 || width0;

	var can = document.createElement("canvas"),
		can2 = document.createElement("canvas"),
		ctx = can.getContext("2d"),
		ctx2 = can2.getContext("2d");

	can.width = width0;
	can.height = Math.ceil(idxi32.length / width0);
	can2.width = width1;
	can2.height = Math.ceil(can.height * width1 / width0);

	ctx.imageSmoothingEnabled = ctx.mozImageSmoothingEnabled = ctx.msImageSmoothingEnabled = false;
	ctx2.imageSmoothingEnabled = ctx2.mozImageSmoothingEnabled = ctx2.msImageSmoothingEnabled = false;

	var imgd = ctx.createImageData(can.width, can.height);

	var buf32 = new Uint32Array(imgd.data.buffer);
	buf32.set(idxi32);

	ctx.putImageData(imgd, 0, 0);

	ctx2.drawImage(can, 0, 0, can2.width, can2.height);

	return can2;
}