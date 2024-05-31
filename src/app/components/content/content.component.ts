import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
    imageurl:any;
    productUrl:string;
    title:string;
    category:string;
    iframeUrl: string = 'https://www.junkybooks.com/book/reader.php?book=thebooks/665838f43845b-click-bank-guide.pdf';
    constructor(){
      this.productUrl="https://www.junkybooks.com/book/reader.php?book=thebooks/665838f43845b-click-bank-guide.pdf"
      this.title="Click Bank Guide"
      this.category="Marketing"
      this.imageurl="https://www.junkybooks.com/administrator/bookimages/665838f4384042.05932183.png"
    }
    change_image=async(val:any)=>{
      let api:string=`http://localhost:3000/items/${val}`;
      const response = await fetch(api).then(response => response.json())
            .then(data => {
              this.imageurl=data.image_url;
              this.productUrl=data.productlink;
              this.category=data.tag;
              this.title=data.title
            }
              
            )
            .catch(error => console.error('Error:', error));
    }

}
