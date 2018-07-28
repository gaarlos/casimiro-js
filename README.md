# Casimiro

> 'Soy Casimiro, y vengo a analizar tu comportamiento humano,
>
> \*sondas radioactivas activadas\*
>
> Túmbate y relájate escuchando el profundo sonido de mi voz...

## ¿Qué es Casimiro?

Casimiro es un pequeño bot para Telegram desarrollado en Node.js gracias a <a href="https://telegraf.js.org/">Telegraf.js</a>.

## ¿Qué necesitas?

_Debes clonar o descargar este código para utilizarlo._

Para empezar a utilizarlo con tu propio bot necesitas obtener un <a href="https://core.telegram.org/bots#3-how-do-i-create-a-bot">Token de Telegram</a>

A continuación debes instalar <strong>Node.js<strong> y las distintas dependencias que vamos a utilizar:

> <a href="https://nodejs.org/es/">Node.js</a>

```bash
# Dependencias con yarn
$ yarn install

# Dependencias con npm
$ npm run install
```

## Configuración

En el fichero _.env_ debes añadir tu propio TOKEN generado por el <i>BotFather</i> de Telegram.

**Para que Casimiro pueda responder es importante desactivar el _modo privacidad_ del bot desde BotFather**

## Iniciar el bot

Una vez configurado puedes iniciar el bot desde la terminal:

```bash
# Lanzar el bot con yarn
$ yarn dev

# Lanzar el bot con npm
$ npm run dev
```

## Para personalizar las respuestas

Para personalizar las respuestas del bot debemos editar dos archivos:

_/database/messages.json_ Para controlar los mensajes de entrada

```json
{
  "tipo_mensaje": ["mensaje1", "mensaje2"]
}
```

_/database/responses.json_ Para controlar las respuestas

```json
{
  "tipo_respuesta": ["respuesta1", "respuesta2"]
}
```

A continuación en casimiro.js podremos utilizarlos en la función _hears_ de la siguiente forma.

```javascript
bot.hears(
  isMessage(messages.tipo_mensaje),
  replyTo(randomAnswer(responses.tipo_respuesta))
);
```

## Nuevos métodos

Además de todos los métodos incluidos en <a href="https://telegraf.js.org/">Telegraf.js</a>, se han añadido los siguientes métodos:

### replyTo

Permite contestar a un mensaje.

| Param | Type     | Description             |
| ----- | -------- | ----------------------- |
| msg   | `string` | El mensaje de respuesta |

### isMessage

Comprueba si el mensaje de entrada se encuentra en la lista de mensajes dada.

| Param     | Type    | Description                        |
| --------- | ------- | ---------------------------------- |
| toCompare | `array` | El array de mensajes para comparar |

### randomAnswer

Escoge de forma aleatoria entre un array de mensajes

| Param     | Type    | Description                         |
| --------- | ------- | ----------------------------------- |
| responses | `array` | El array de mensajes para contestar |

## License

casimiro.js es de código libre y licenciado bajo la licencia MIT, Version 2.0. Ver [LICENSE](LICENSE) para ver el texto completo.
