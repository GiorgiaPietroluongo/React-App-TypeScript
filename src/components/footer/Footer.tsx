import './Footer.css';

interface footer{
    titulo1: string
    item1: string
    item2: string
    item3: string

    titulo2: string
    item4: string
    item5: string


}

function Footer(footer: footer){
    return(
       <div className='footer-body'>
        <div className='title' >
            {footer.titulo1}
        </div>
        <div className='itens'>
        <div>
            {footer.item1}
        </div>
        <div>
            {footer.item2}
        </div>
        <div>
            {footer.item3}
        </div></div>
        <div className='title'>
            {footer.titulo2}
        </div>
        <div className='itens'>
        <div>
            {footer.item4}
        </div>
        <div>
            {footer.item5}
        </div>
        </div>
       </div>
                
        

    )
}

export default Footer;