"use client"
import gsap from "gsap";
import { useState, useEffect } from 'react'


export default function Cercle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  },[]);


  var $ball: Element | null;
  var $hoverables: NodeListOf<Element> | null;
  var $smallBall: Element | null;
  //variables
  if(typeof document !== 'undefined'){
    $ball = document.querySelector('.cursor__ball--big');
    $smallBall = document.querySelector('.cursor__ball--small');
    $hoverables = document.querySelectorAll('.hoverable');

    //listeners
    document.body.addEventListener('mousemove', onMouseMove);
    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener('mouseenter', onMouseHover);
      $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }
  }

  //
  // Move the cursor
  function onMouseMove(e: MouseEvent) {
    if(mounted){
      if($smallBall?.classList.contains("invisible")){  $smallBall.classList.remove("invisible");}
      if($ball?.classList.contains("invisible")){ $ball.classList.remove("invisible"); }

      gsap.to($ball, .2, {
        x: e.pageX - 15 -22,
        y: e.pageY - 15 -25,
      })
      gsap.to($smallBall, .05, {
        x: e.pageX - 5 -8,
        y: e.pageY - 7 -8,
      })
    }
  }

  // Hover an element
  function onMouseHover() {
    gsap.to($smallBall, .3, {
      scale: -2.2
    })
  }
  function onMouseHoverOut() {
    gsap.to($smallBall, .3, {
      scale: 1
    })
  }

  return (
    <div className="cursor">
      <div className="invisible cursor__ball cursor__ball--big">
        <svg height="75" width="75">
          <circle r="35" cx="38" cy="38" strokeWidth="0"/>
        </svg>
      </div>
      <div className="invisible cursor__ball cursor__ball--small">
        <svg height="30" width="30">
          <circle r="12" cx="15" cy="15" strokeWidth="0"/>
        </svg>
      </div>
    </div>

  );
}
