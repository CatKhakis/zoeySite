const cardHolder=document.getElementById("cardHolder")
const card=document.getElementById("businessCard")
cardHolder.addEventListener("mousemove",(event)=>{card.classList.remove('classname');const bounds=cardHolder.getBoundingClientRect();centerX=bounds.left+(bounds.width/2);centerY=bounds.top+(bounds.height/2);mouseX=event.x;mouseY=event.y;yFactor=mouseY-centerY;xFactor=centerX-mouseX;xRotation=10;yRotation=5;card.style.transform=`
    perspective(1200px)
    rotateY(${map_range(xFactor, -(bounds.width / 2), (bounds.width / 2), -xRotation, xRotation)}deg) 
    rotateX(${map_range(yFactor, -(bounds.height / 2), (bounds.height / 2), -yRotation, yRotation)}deg)
    `;});cardHolder.addEventListener("mouseout",(event)=>{card.classList.add('classname');});function map_range(value,low1,high1,low2,high2){return low2+(high2-low2)*(value-low1)/(high1-low1);}
const root=document.querySelector(':root');const shadeSelector=document.getElementById("shadeSelector");root.classList.add("frappe");updateTone();shadeSelector.addEventListener("click",(event)=>{if(!event.target.id){clickedShade=event.target.classList[0];root.classList.remove(...root.classList);root.classList.add(clickedShade);updateTone();}else{console.log("click");}});shadeSelector.addEventListener("mouseenter",(event)=>{console.log("mouseenter");});shadeSelector.addEventListener("mouseleave",(event)=>{console.log("mouseleave");});function updateTone(){currentTone=root.classList[0];rootRules=getStylesheet().style;for(let i=0;i<rootRules.length;i++){propertyName=rootRules.item(i);rootRules.setProperty(propertyName,`var(--ctp-${currentTone}${propertyName.replace('--', '-')})`);}}
function getStylesheet(){for(const sheet of document.styleSheets){for(const element of sheet.cssRules){if(element.selectorText===":root"){if(element.style[0]==="--text"){return element;}}}}
return null;}
(function zoeypet(){const zoey=document.createElement("div");let nekoPosX=300;let nekoPosY=64;let mousePosX=0;let mousePosY=0;let frameCount=0;let idleTime=0;let idleAnimation=null;let idleAnimationFrame=0;const nekoSpeed=20;const spriteSets={idle:[[-3,-3]],alert:[[-7,-3]],scratchSelf:[[-5,0],[-6,0],],scratchWallN:[[0,0],[0,-1],],scratchWallS:[[-7,-1],[-6,-2],],scratchWallE:[[-2,-2],[-2,-3],],scratchWallW:[[-4,0],[-4,-1],],tired:[[-3,-2]],sleeping:[[-2,0],[-2,-1],],N:[[-1,-2],[-1,-3],],NE:[[0,-2],[0,-3],],E:[[-3,0],[-3,-1],],SE:[[-5,-1],[-5,-2],],S:[[-6,-3],[-7,-2],],SW:[[-5,-3],[-6,-1],],W:[[-4,-2],[-4,-3],],NW:[[-1,0],[-1,-1],],};function init(){zoey.id="oneko";zoey.ariaHidden=true;zoey.style.width="64px";zoey.style.height="64px";zoey.style.position="fixed";zoey.style.pointerEvents="none";zoey.style.imageRendering="pixelated";zoey.style.left=`${nekoPosX - 16}px`;zoey.style.top=`${nekoPosY - 16}px`;zoey.style.zIndex=2147483647;let nekoFile="../theme/js/oneko.gif";const curScript=document.currentScript;if(curScript&&curScript.dataset.cat){nekoFile=curScript.dataset.cat}
zoey.style.backgroundImage=`url(${nekoFile})`;document.body.appendChild(zoey);document.addEventListener("mousemove",function(event){mousePosX=event.clientX;mousePosY=event.clientY;});setSprite("idle",0);window.requestAnimationFrame(onAnimationFrame);}
let lastFrameTimestamp;function onAnimationFrame(timestamp){if(!zoey.isConnected){return;}
if(!lastFrameTimestamp){lastFrameTimestamp=timestamp;}
if(timestamp-lastFrameTimestamp>100){lastFrameTimestamp=timestamp
frame()}
window.requestAnimationFrame(onAnimationFrame);}
function setSprite(name,frame){const sprite=spriteSets[name][frame%spriteSets[name].length];zoey.style.backgroundPosition=`${sprite[0] * 64}px ${sprite[1] * 64}px`;}
function resetIdleAnimation(){idleAnimation=null;idleAnimationFrame=0;}
function idle(){idleTime+=1;if(idleTime>10&&idleAnimation==null){let avalibleIdleAnimations=["sleeping","scratchSelf"];if(nekoPosX<32){avalibleIdleAnimations.push("scratchWallW");}
if(nekoPosY<32){avalibleIdleAnimations.push("scratchWallN");}
if(nekoPosX>window.innerWidth-32){avalibleIdleAnimations.push("scratchWallE");}
if(nekoPosY>window.innerHeight-32){avalibleIdleAnimations.push("scratchWallS");}
idleAnimation=avalibleIdleAnimations[Math.floor(Math.random()*avalibleIdleAnimations.length)];}
switch(idleAnimation){case"sleeping":if(idleAnimationFrame<8){setSprite("tired",0);break;}
setSprite("sleeping",Math.floor(idleAnimationFrame/4));if(idleAnimationFrame>192){resetIdleAnimation();}
break;case"scratchWallN":case"scratchWallS":case"scratchWallE":case"scratchWallW":case"scratchSelf":setSprite(idleAnimation,idleAnimationFrame);if(idleAnimationFrame>9){resetIdleAnimation();}
break;default:setSprite("idle",0);return;}
idleAnimationFrame+=1;}
function frame(){frameCount+=1;const diffX=nekoPosX-mousePosX;const diffY=nekoPosY-mousePosY;const distance=Math.sqrt(diffX**2+diffY**2);if(distance<nekoSpeed||distance<48){idle();return;}
idleAnimation=null;idleAnimationFrame=0;if(idleTime>1){setSprite("alert",0);idleTime=Math.min(idleTime,7);idleTime-=1;return;}
let direction;direction=diffY/distance>0.5?"N":"";direction+=diffY/distance<-0.5?"S":"";direction+=diffX/distance>0.5?"W":"";direction+=diffX/distance<-0.5?"E":"";setSprite(direction,frameCount);nekoPosX-=(diffX/distance)*nekoSpeed;nekoPosY-=(diffY/distance)*nekoSpeed;nekoPosX=Math.min(Math.max(16,nekoPosX),window.innerWidth-16);nekoPosY=Math.min(Math.max(16,nekoPosY),window.innerHeight-16);zoey.style.left=`${nekoPosX - 16}px`;zoey.style.top=`${nekoPosY - 16}px`;}
init();})();