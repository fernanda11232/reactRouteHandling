import React from 'react'
import './main.css';

export const Main = () => {

    const imagePresentation = 'https://res.cloudinary.com/duajpu4mw/image/upload/v1677248674/PracticaReact/descarga-removebg-preview_c1kynw.png'

    return (

        <main>
            <img className='img-Main' src={imagePresentation} alt='Image pantera'/>
            <div>
                <h1>Historia pantera rosa</h1>
                <p>Sorprendentemente, el nacimiento de la pantera rosa fue prácticamente una casualidad. En la película original titulada La pantera rosa, de Blake Edwards, la pantera rosa     era, en realidad, un diamante de mucho valor y, por extensión, un ladrón de guante blanco que había logrado robarlo. En esa primera película se recurrió a una animación para     ilustrar el título y los créditos iniciales y finales de la película. Blake Edwards encargó al prestigioso animador Friz Freleng (1906-1995, creador de Bugs Bunny, Porky Pig,     Piolín, El gato Silvestre, Sam Bigotes y Speedy González, entre otros) que crease un dibujo animado de una pantera, y solo le pidió tres cosas: que fuera graciosa, muda y de     color rosa.

                La Pantera Rosa puede ser definida como un gentleman británico: elegante hasta en el último de sus gestos. Es un felino antropomórfico, de aspecto físico delgado, con la particularidad                 de ser de color rosa y aparentemente mudo ―en dos de los episodios de la serie original sí habla, así como en la serie de 1993 (decisión que no agradó a los fanes más tradicionales del                 personaje)―; un personaje bastante metódico, con una capacidad intelectual muy elevada y de genio bastante alegre y muy simpático.

                Por lo general, se mete en algún lío o simplemente realiza tareas bastante comunes pero con un toque cómico singular, lo cual haría recordar por un momento un característico pero poco                 denotado parecido muy especial al gran maestro de la cinematografía sir Charles Chaplin y al personaje Charlot.</p>
            </div>
        </main>

    )
}
