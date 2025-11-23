import React from "react";

export default function Footer() {
  return (
  
  <footer class="bg-gray-900 text-white py-8 mt-10 flex justify-items">
    <div class="container mx-auto  space-y-2 ml-7">
      <h2 class="text-lg font-semibold">Contact Us</h2>
      <p>Email:  
        <a href="mailto:lpoceylon@gmail.com" class="text-blue-400 hover:text-blue-500 underline">
         lpoceylon@gmail.com
        </a>
      </p>
      <p>Phone: 
        <a href="tel:0740189260" class="text-blue-400 hover:text-blue-500 underline">
        +94 740189260
        </a>
      </p>
      <p>Ja-Ela office: No. 19, Market Building, Ja-Ela, Sri Lanka<br/>
        Colombo office: No. 130, Hulftsdrop st, Colombo-12, Sri Lanka
      </p>

      <p class="mt-4 text-sm text-gray-400 ">&copy; 2025 LPO Sri Lanka (PVT) LTD. All rights reserved.</p>
      
    </div>
    <div className="mr-10">
      <a href="/"><img src="LPO7.png" className="w-64 h-auto md:w-100"/></a>
    </div>
    
</footer>

  );
}
