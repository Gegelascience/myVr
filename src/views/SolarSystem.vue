<template>
    <div class="solarSys">
        <a-scene embedded background="color:#000000">
            <a-camera position="0 20 50"></a-camera>
            <a-sky src="./textures/space2.jpg"></a-sky>
            <a-sphere src="./textures/sun.jpg" radius="15"></a-sphere>
            <a-sphere src="./textures/mercure.jpg" planet="tRevol:200000;semiAxe:10;angularStart:260;tRotation:3000" radius="2"></a-sphere>
            <a-ring radius-inner="19.8" radius-outer="20.2" rotation="-90 0 0"></a-ring>
            <a-sphere src="./textures/venus.jpg" planet="tRevol:300000;semiAxe:15angularStart:40;tRotation:4000" radius="2"></a-sphere>
            <a-ring radius-inner="29.8" radius-outer="30.2" rotation="-90 0 0"></a-ring>
            <a-sphere src="./textures/earth.jpg" planet radius="2"></a-sphere>
            <a-ring radius-inner="39.8" radius-outer="40.2" rotation="-90 0 0"></a-ring>
            <a-sphere src="./textures/mars.jpg" planet="tRevol:600000;semiAxe:25angularStart:130;tRotation:6000" radius="2" ></a-sphere>
            <a-ring radius-inner="49.8" radius-outer="50.2" rotation="-90 0 0"></a-ring>
            <a-sphere src="./textures/jupiter.jpg" planet="tRevol:700000;semiAxe:30angularStart:90;tRotation:7000" radius="4" ></a-sphere>
            <a-ring radius-inner="59.8" radius-outer="60.2" rotation="-90 0 0"></a-ring>
            <a-sphere src="./textures/saturne.jpg" planet="tRevol:800000;semiAxe:35angularStart:220;tRotation:8000" radius="4">
                <a-circle radius="6" src="./textures/rings.png" position="0 0 0" rotation="-90 0 0"></a-circle>
            </a-sphere>
            <a-ring radius-inner="69.8" radius-outer="70.2" rotation="-90 0 0"></a-ring>
            <a-sphere src="./textures/uranus.jpg" planet="tRevol:900000;semiAxe:40angularStart:200;tRotation:9000" radius="3"></a-sphere>
            <a-ring radius-inner="79.8" radius-outer="80.2" rotation="-90 0 0"></a-ring>
            <a-sphere src="./textures/neptune.jpg" planet="tRevol:1000000;semiAxe:45angularStart:300;tRotation:10000" radius="3"></a-sphere>
            <a-ring radius-inner="89.8" radius-outer="90.2" rotation="-90 0 0"></a-ring>
        </a-scene>
    </div>    
</template>

<style scoped>
a-scene {
 height: 80vh;
 width: 80%;
 margin-left: auto;
 margin-right: auto;
 margin-top: 15px
}
</style>