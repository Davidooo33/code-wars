// To introduce the problem think to my neighbor who drives a tanker truck. The level indicator is down and he is worried because he does not know if he will be able to make deliveries. We put the truck on a horizontal ground and measured the height of the liquid in the tank.

// Fortunately the tank is a perfect cylinder and the vertical walls on each end are flat. The height of the remaining liquid is h, the diameter of the cylinder base is d, the total volume is vt (h, d, vt are positive or null integers). You can assume that h <= d.

// Could you calculate the remaining volume of the liquid? Your function tankvol(h, d, vt) returns an integer which is the truncated result (e.g floor) of your float calculation.

function tankvol(h, d, vt) {
    let r = d / 2;
    let w = vt / (r ** 2 * Math.PI);
    let a = (r ** 2) * Math.acos(1 - h / r) 
          - (r - h) * Math.sqrt(2 * r * h - h * h); 
    
    return w * a | 0;
  }
