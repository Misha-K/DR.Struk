

//animation blok

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else{
                animItem.classList.remove('_active');
            }
            
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
        scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
        return{ top: rect.top + scrollTop, left: rect.left + scrollLeft}
        
    }
    setTimeout(() => {
        animOnScroll();
    }, 100);
    
}


(function(){

    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    w = canvas.width = window.innerWidth - 25,
    h = canvas.height = innerHeight,
    particles = [],
    properties = {
        bgColor :'rgba(255, 255, 255, 1)',
        particleColor :'rgba(0, 0, 0, 0.6)',
        particleRadius : 1,
        particleMaxVelocity : 0.3,
        particleCount : 170,
        lineLength     : 100,
        particleLife    : 60
        
    }
    document.querySelector('.content').appendChild(canvas);

    window.oversize = function(){
        w = canvas.width = innerWidth,
        h = canvas.height = innerHeight;
    }

    class Particle{
        constructor(){
            this.x = Math.random()*w;
            this.y = Math.random()*h;
            this.velocityX = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;
            this.velocityY = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;
            this.life = Math.random()*properties.particleLife*60;
        }

        position(){
            this.x + this.velocityX > w && this.velocityX > 0 ||  this.x + this.velocityX < 0 && this.velocityX <0? this.velocityX*=-1 : this.velocityX;
            this.y + this.velocityY > h && this.velocityY > 0 ||  this.y + this.velocityY < 0 && this.velocityY <0? this.velocityY*=-1 : this.velocityY;
            this.x += this.velocityX;
            this.y += this.velocityY;
        }

        reDraw(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI*2);
            ctx.closePath();
            ctx.fillStyle = properties.particleColor;
            ctx.fill();
        }

        reCalculateLife(){
            if(this.life < 1){
                this.x = Math.random()*w;
                this.y = Math.random()*h;
                this.velocityX = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;
                this.velocityY = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;
                this.life = Math.random()*properties.particleLife*60;
            }
            this.life--;
        }
    }

    function reDrawBackground(){
        ctx.fillStyle = properties.bgColor;
        ctx.fillRect(0, 0, w, h);
    }

    function drawLines(){
        var x1, y1, x2, y2, length, opacity;
        for(var i = 0; i<particles.length; i++ ) { 
            for(var j = i + 1; j<particles.length; j++ ){
                x1 = particles[i].x;
                y1 = particles[i].y;
                x2 = particles[j].x;
                y2 = particles[j].y;

                length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                if (length < properties.lineLength) {
                    opacity = 1-length/properties.lineLength;
                    ctx.lineWidth = '0.2';
                    ctx.strokeStyle = 'rgba(7, 147, 138, '+opacity+')';
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.closePath();
                    ctx.stroke();
                }

            }
        }
    }

    function reDrawParticles(){
        for(var i in particles){
            particles[i].reCalculateLife();
            particles[i].position();
            particles[i].reDraw();
        }
        
    }

    function loop(){

        reDrawBackground();
        reDrawParticles();
        drawLines();
        requestAnimationFrame(loop);
    }

    function init(){
        for(var i = 0; i < properties.particleCount; i++){
            particles.push(new Particle);
        }
        loop();

    }

    init();


}())


function slowScroll(id){
    var offset;
    
    if(id == "#styles1"){
    offset=0;
    
    }else offset=0;

    console.log($(id).offset());
    $('html, body').animate({
        scrollTop: $(id).offset().top + offset
        }, 100);

       
        return false;
    }

    function slowScroll(id){
        var offset;
        
        if(id == "#styles2"){
        offset=0;
        
        }else offset=0;
    
        console.log($(id).offset());
        $('html, body').animate({
            scrollTop: $(id).offset().top + offset
            }, 100);
    
           
            return false;
        }

        function slowScroll(id){
            var offset;
            
            if(id == "#styles3"){
            offset=0;
            
            }else offset=0;
        
            console.log($(id).offset());
            $('html, body').animate({
                scrollTop: $(id).offset().top + offset
                }, 100);
        
               
                return false;
            }

            function slowScroll(id){
                var offset;
                
                if(id == "#styles4"){
                offset=0;
                
                }else offset=0;
            
                console.log($(id).offset());
                $('html, body').animate({
                    scrollTop: $(id).offset().top + offset
                    }, 100);
            
                   
                    return false;
                }

                function slowScroll(id){
                    var offset;
                    
                    if(id == "#styles5"){
                    offset=0;
                    
                    }else offset=0;
                
                    console.log($(id).offset());
                    $('html, body').animate({
                        scrollTop: $(id).offset().top + offset
                        }, 100);
                
                       
                        return false;
                    }
