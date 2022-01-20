(this["webpackJsonpgithub-profile"]=this["webpackJsonpgithub-profile"]||[]).push([[0],{72:function(n,e,t){"use strict";t.r(e);var i,o,r,c,a,l,s,d,h,x,p,j,b,u,g,f,O,w,v,m,k,y,z,D,C=t(0),F=t.n(C),U=t(33),_=t.n(U),R=t(18),S=t(4),E=t(2),I=t(3),J=I.a.main(i||(i=Object(E.a)(["\n    width: 100%;\n    height: 127vh;\n    background: #000000;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n"]))),P=t(1),T=function(n){return Object(P.jsx)(J,{children:n.children})},B=t(20),G=t.n(B),L=t(37),M=t(11),q=t(39),A=I.a.header(o||(o=Object(E.a)(["\n    width: 400px;\n    height: 130px;\n    background-image: linear-gradient(rgb(62, 6, 95), rgb(142, 5, 194));\n\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n\n    @media (max-width: 430px) {\n        width: 300px;\n    }\n"]))),H=I.a.h1(r||(r=Object(E.a)(["\n    margin: 0;\n    padding: 15px 0;\n    color: #e5e5e5;\n    font-size: 30px;\n    font-weight: 700;\n    text-align: center;\n    width: 100%;\n"]))),K=I.a.div(c||(c=Object(E.a)(["\n    padding: 10px 16px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    a {\n        width: 30px;\n        height: 30px;\n        border-radius: 15px;\n        border: none;\n        background: #ff7a00;\n        margin-left: 10px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: #fff;\n        transition: ease 0.3s;\n\n        &:hover {\n            transform: scale(1.05);\n            transition: ease 0.3s;\n            cursor: pointer;\n        }\n    }\n"]))),N=I.a.input(a||(a=Object(E.a)(["\n    width: 200px;\n    height: 30px;\n    border-radius: 15px;\n    border: none;\n    padding: 0 16px;\n    color: #444;\n    transition: 0.4s ease;\n\n    &:focus {\n        outline: none;\n        width: 220px;\n        transition: 0.4s ease;\n    }\n"]))),Q=I.a.button(l||(l=Object(E.a)(["\n    width: 30px;\n    height: 30px;\n    border-radius: 15px;\n    border: none;\n    background: #3e065f;\n    margin-left: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    transition: ease 0.3s;\n\n    &:hover {\n        transform: scale(1.05);\n        transition: ease 0.3s;\n        cursor: pointer;\n    }\n"]))),V=t(38),W=t.n(V).a.create({baseURL:"https://api.github.com/users"}),X=Object(C.createContext)(),Y=function(n){var e=Object(C.useState)({}),t=Object(M.a)(e,2),i=t[0],o=t[1],r=Object(C.useState)([]),c=Object(M.a)(r,2),a=c[0],l=c[1],s=Object(C.useState)([]),d=Object(M.a)(s,2),h=d[0],x=d[1],p=Object(C.useState)([]),j=Object(M.a)(p,2),b=j[0],u=j[1];return Object(P.jsx)(X.Provider,{value:{userData:i,userRepos:a,setUserRepos:l,setUserData:o,userFollowers:h,setUserFollowers:x,userFollowings:b,setUserFollowings:u},children:n.children})},Z=function(){var n=Object(C.useContext)(X),e=Object(C.useState)(""),t=Object(M.a)(e,2),i=t[0],o=t[1];function r(){return(r=Object(L.a)(G.a.mark((function e(){var t,o,r,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.get("/".concat(i));case 3:return t=e.sent,e.next=6,W.get("/".concat(i,"/repos"));case 6:return o=e.sent,e.next=9,W.get("/".concat(i,"/followers"));case 9:return r=e.sent,e.next=12,W.get("/".concat(i,"/following"));case 12:c=e.sent,n.setUserData(t.data),n.setUserRepos(o.data),n.setUserFollowers(r.data),n.setUserFollowings(c.data),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})))).apply(this,arguments)}return Object(C.useEffect)((function(){})),Object(P.jsxs)(A,{children:[Object(P.jsx)(H,{children:"Github Profile"}),Object(P.jsxs)(K,{children:[Object(P.jsx)(N,{value:i,onChange:function(n){return o(n.target.value)}}),Object(P.jsx)(Q,{onClick:function(){return r.apply(this,arguments)},children:Object(P.jsx)(q.a,{size:15})})]})]})},$=I.a.section(s||(s=Object(E.a)(["\n    width: 400px;\n    background: rgba(255, 255, 255, 0.95);\n    border-radius: 10px;\n    border-bottom: 10px solid #8e05c2;\n    margin-top: 15px;\n"]))),nn=function(n){return Object(P.jsx)($,{children:n.children})},en=I.a.div(d||(d=Object(E.a)(["\n    width: 100%;\n    height: 200px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),tn=I.a.img(h||(h=Object(E.a)(["\n    width: 130px;\n    height: 130px;\n    border-radius: 100%;\n    border: 1px solid #fff;\n"]))),on=function(n){return Object(P.jsx)(en,{children:Object(P.jsx)(tn,{src:null===n||void 0===n?void 0:n.url,alt:null===n||void 0===n?void 0:n.alternativeText})})},rn=I.a.div(x||(x=Object(E.a)(["\n    width: 100%;\n    height: 100px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n"]))),cn=I.a.h1(p||(p=Object(E.a)(["\n    width: 100%;\n    text-align: center;\n    font-size: 20px;\n    font-weight: 700;\n    color: #444;\n"]))),an=I.a.h2(j||(j=Object(E.a)(["\n    width: 100%;\n    text-align: center;\n    font-size: 10px;\n    font-weight: 500;\n    color: #777;\n    padding: 5px;\n"]))),ln=I.a.p(b||(b=Object(E.a)(["\n    width: 300px;\n    height: 30px;\n    margin: 10px 0;\n    font-size: 12px;\n    text-align: center;\n    color: #777;\n    line-height: 1.3;\n    overflow: hidden;\n    font-weight: bold;\n\n    @media (max-width: 430px) {\n        width: 250px;\n    }\n"]))),sn=I.a.p(u||(u=Object(E.a)(["\n    height: 2px;\n    font-size: 8px;\n    color: #444;\n"]))),dn=function(n){return Object(P.jsxs)(rn,{children:[Object(P.jsx)(cn,{children:n.name}),Object(P.jsxs)(an,{children:[n.login," ID:",n.id]}),Object(P.jsx)(ln,{children:null===n||void 0===n?void 0:n.bio}),Object(P.jsxs)(sn,{children:["Create Date :",null===n||void 0===n?void 0:n.created_at]})]})},hn=I.a.div(g||(g=Object(E.a)(["\n    width: 100%;\n    height: 80px;\n    padding: 0 16px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n"]))),xn=I.a.div(f||(f=Object(E.a)(["\n    width: 100px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n\n    h1 {\n        font-size: 20px;\n        text-align: center;\n        color: black;\n    }\n    h2 {\n        font-size: 12px;\n        text-align: center;\n        color: #444;\n    }\n\n    &:hover {\n        cursor: pointer;\n        background: rgba(0, 0, 0, 0.03);\n        transition: 0.4s ease-out;\n        border-radius: 10px;\n    }\n"]))),pn=function(n){var e=Object(S.f)(),t=function(n){return e.push(n)};return Object(P.jsxs)(hn,{children:[Object(P.jsxs)(xn,{onClick:function(){return t("/repos")},children:[Object(P.jsx)("h1",{children:n.repos}),Object(P.jsx)("h2",{children:"Repositories"})]}),Object(P.jsxs)(xn,{onClick:function(){return t("/followers")},children:[Object(P.jsx)("h1",{children:n.followers}),Object(P.jsx)("h2",{children:"Followers"})]}),Object(P.jsxs)(xn,{onClick:function(){return t("/following")},children:[Object(P.jsx)("h1",{children:n.following}),Object(P.jsx)("h2",{children:"Following"})]})]})},jn=I.a.div(O||(O=Object(E.a)(["\n    width: 13%;\n    height: 10px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n"]))),bn=(I.a.a(w||(w=Object(E.a)(["\n    font-size: 10px;\n    height: 50px;\n    color: blue;\n    text-align: center;\n"]))),I.a.p(v||(v=Object(E.a)(["\n    font-size: 10px;\n    height: 50px;\n    color: blue;\n"])))),un=(I.a.p(m||(m=Object(E.a)(["\n    font-size: 4px;\n    height: 50px;\n"]))),function(n){return Object(P.jsx)(jn,{children:Object(P.jsxs)(bn,{children:[" ",n.id]})})});function gn(){var n,e,t,i,o,r,c,a,l,s,d,h=Object(C.useContext)(X);return Object(P.jsxs)(T,{children:[Object(P.jsx)(Z,{}),Object(P.jsx)(nn,{children:(null===(n=h.userData)||void 0===n?void 0:n.name)?Object(P.jsxs)(F.a.Fragment,{children:[Object(P.jsx)(on,{url:null===(e=h.userData)||void 0===e?void 0:e.avatar_url,alternativeText:null===(t=h.userData)||void 0===t?void 0:t.login}),Object(P.jsx)(dn,{name:null===(i=h.userData)||void 0===i?void 0:i.name,login:null===(o=h.userData)||void 0===o?void 0:o.login,bio:null===(r=h.userData)||void 0===r?void 0:r.bio,id:null===(c=h.userData)||void 0===c?void 0:c.id,created_at:null===(a=h.userData)||void 0===a?void 0:a.created_at}),Object(P.jsx)(un,{}),Object(P.jsx)(pn,{repos:null===(l=h.userData)||void 0===l?void 0:l.public_repos,followers:null===(s=h.userData)||void 0===s?void 0:s.followers,following:null===(d=h.userData)||void 0===d?void 0:d.following})]}):void 0})]})}var fn,On,wn,vn,mn,kn,yn,zn,Dn=I.a.section(k||(k=Object(E.a)(["\n    width: 600px;\n    height: 400px;\n    background-color: white;\n    border-radius: 10px;\n    border-bottom: 10px solid #8e05c2;\n    margin-top: 15px;\n\n    @media (max-width: 430px) {\n        width: 300px;\n    }\n"]))),Cn=I.a.h1(y||(y=Object(E.a)(["\n    font-size: 20px;\n    font-weight: 700;\n    margin-top: 10px;\n    color: black;\n    width: 100%;\n    text-align: center;\n    height: 30px;\n"]))),Fn=I.a.h1(z||(z=Object(E.a)(["\n    height: 350px;\n    width: 100%;\n    padding: 10px;\n    overflow-y: scroll;\n"]))),Un=I.a.h2(D||(D=Object(E.a)(["\n    width: 100%;\n    height: 80px;\n    background-image: linear-gradient(rgb(62, 6, 95), rgb(142, 5, 194));\n\n    border-radius: 5px;\n    padding: 10px;\n    margin-bottom: 10px;\n    h2 {\n        font-size: 15px;\n        width: 100%;\n        overflow: hidden;\n        color: white;\n    }\n    p {\n        font-size: 12px;\n        font-weight: 400;\n        color: white;\n        overflow: hidden;\n        line-height: 1.3;\n        margin-top: 5 px;\n        width: 100%;\n        height: 30px;\n        color: white;\n    }\n"]))),_n=function(n){var e;return Object(P.jsxs)(Dn,{children:[Object(P.jsxs)(Cn,{children:["Repositories of ",null===(e=n.name)||void 0===e?void 0:e.split(" ")[0]," "]}),Object(P.jsx)(Fn,{children:(null===n||void 0===n?void 0:n.repos).map((function(n){return Object(P.jsxs)(Un,{onClick:function(){return window.location.href(null===n||void 0===n?void 0:n.html_url)},children:[Object(P.jsx)("h2",{children:null===n||void 0===n?void 0:n.name}),Object(P.jsx)("p",{children:null===n||void 0===n?void 0:n.description})]},null===n||void 0===n?void 0:n.id)}))})]})},Rn=function(n){var e,t=Object(C.useContext)(X);return Object(P.jsx)(T,{children:Object(P.jsx)(_n,{name:null===(e=t.userData)||void 0===e?void 0:e.name,repos:t.userRepos})})},Sn=I.a.section(fn||(fn=Object(E.a)(["\n    width: 600px;\n    height: 400px;\n    background-color: white;\n    border-radius: 10px;\n    border-bottom: 10px solid #8e05c2;\n    margin-top: 15px;\n\n    @media (max-width: 430px) {\n        width: 300px;\n    }\n"]))),En=I.a.h1(On||(On=Object(E.a)(["\n    font-size: 20px;\n    font-weight: 700;\n    margin-top: 10px;\n    color: black;\n    width: 100%;\n    text-align: center;\n    height: 30px;\n"]))),In=I.a.h1(wn||(wn=Object(E.a)(["\n    height: 350px;\n    width: 100%;\n    padding: 10px;\n    overflow-y: scroll;\n"]))),Jn=I.a.h2(vn||(vn=Object(E.a)(["\n    width: 100%;\n    height: 80px;\n    background-image: linear-gradient(rgb(62, 6, 95), rgb(142, 5, 194));\n\n    border-radius: 5px;\n    padding: 10px;\n    margin-bottom: 10px;\n    h2 {\n        font-size: 20px;\n        width: 100%;\n        overflow: hidden;\n        color: white;\n    }\n    p {\n        font-size: 12px;\n        font-weight: 400;\n        color: white;\n        overflow: hidden;\n        line-height: 1.3;\n        margin-top: 5 px;\n        width: 100%;\n        height: 30px;\n        color: white;\n    }\n    img {\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        border: 1px solid #fff;\n    }\n"]))),Pn=function(n){return Object(P.jsxs)(Sn,{children:[Object(P.jsx)(En,{children:"Followers "}),Object(P.jsx)(In,{children:(null===n||void 0===n?void 0:n.followers).map((function(n){return Object(P.jsxs)(Jn,{children:[Object(P.jsx)("h2",{children:null===n||void 0===n?void 0:n.login}),Object(P.jsx)("img",{src:null===n||void 0===n?void 0:n.avatar_url,alt:""})]})}))})]})},Tn=function(n){var e=Object(C.useContext)(X);return Object(P.jsx)(J,{children:Object(P.jsx)(Pn,{followers:e.userFollowers})})},Bn=I.a.section(mn||(mn=Object(E.a)(["\n    width: 600px;\n    height: 400px;\n    background-color: white;\n    border-radius: 10px;\n    border-bottom: 10px solid #8e05c2;\n    margin-top: 15px;\n\n    @media (max-width: 430px) {\n        width: 300px;\n    }\n"]))),Gn=I.a.h1(kn||(kn=Object(E.a)(["\n    font-size: 20px;\n    font-weight: 700;\n    margin-top: 10px;\n    color: black;\n    width: 100%;\n    text-align: center;\n    height: 30px;\n"]))),Ln=I.a.h1(yn||(yn=Object(E.a)(["\n    height: 350px;\n    width: 100%;\n    padding: 10px;\n    overflow-y: scroll;\n"]))),Mn=I.a.h2(zn||(zn=Object(E.a)(["\n    width: 100%;\n    height: 80px;\n    background-image: linear-gradient(rgb(62, 6, 95), rgb(142, 5, 194));\n\n    border-radius: 5px;\n    padding: 10px;\n    margin-bottom: 10px;\n    h2 {\n        font-size: 20px;\n        width: 100%;\n        overflow: hidden;\n        color: white;\n    }\n    p {\n        font-size: 12px;\n        font-weight: 400;\n        color: white;\n        overflow: hidden;\n        line-height: 1.3;\n        margin-top: 5 px;\n        width: 100%;\n        height: 30px;\n        color: white;\n    }\n    img {\n        width: 40px;\n        height: 40px;\n        border-radius: 100%;\n        border: 1px solid #fff;\n    }\n"]))),qn=function(n){return Object(P.jsxs)(Bn,{children:[Object(P.jsx)(Gn,{children:"Following"}),Object(P.jsx)(Ln,{children:(null===n||void 0===n?void 0:n.followings).map((function(n){return Object(P.jsxs)(Mn,{children:[Object(P.jsx)("h2",{children:null===n||void 0===n?void 0:n.login}),Object(P.jsx)("img",{src:null===n||void 0===n?void 0:n.avatar_url,alt:""})]})}))})]})},An=function(n){var e=Object(C.useContext)(X);return Object(P.jsx)(J,{children:Object(P.jsx)(qn,{followings:e.userFollowings})})},Hn=function(){return Object(P.jsx)(R.a,{children:Object(P.jsxs)(S.c,{children:[Object(P.jsx)(S.a,{path:"/",exact:!0,component:gn}),Object(P.jsx)(S.a,{path:"/repos",component:Rn}),Object(P.jsx)(S.a,{path:"/followers",component:Tn}),Object(P.jsx)(S.a,{path:"/following",component:An})]})})},Kn=function(){return Object(P.jsx)(Y,{children:Object(P.jsx)(Hn,{})})};_.a.render(Object(P.jsx)(F.a.StrictMode,{children:Object(P.jsx)(Kn,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.5bbac4fa.chunk.js.map