(function() {var implementors = {};
implementors["tokio_tls"] = ["impl&lt;T, I&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_tls/proto/struct.ServerPipelineBind.html' title='tokio_tls::proto::ServerPipelineBind'>ServerPipelineBind</a>&lt;T, I&gt; <span class='where fmt-newline'>where T: ServerProto&lt;<a class='struct' href='tokio_tls/struct.TlsStream.html' title='tokio_tls::TlsStream'>TlsStream</a>&lt;I&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I: <a class='trait' href='https://docs.rs/tokio-core/0.1/tokio_core/io/trait.Io.html' title='tokio_core::io::Io'>Io</a> + 'static</span>","impl&lt;T, I&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_tls/proto/struct.ServerMultiplexBind.html' title='tokio_tls::proto::ServerMultiplexBind'>ServerMultiplexBind</a>&lt;T, I&gt; <span class='where fmt-newline'>where T: ServerProto&lt;<a class='struct' href='tokio_tls/struct.TlsStream.html' title='tokio_tls::TlsStream'>TlsStream</a>&lt;I&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I: <a class='trait' href='https://docs.rs/tokio-core/0.1/tokio_core/io/trait.Io.html' title='tokio_core::io::Io'>Io</a> + 'static</span>","impl&lt;T, I&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_tls/proto/struct.ServerStreamingPipelineBind.html' title='tokio_tls::proto::ServerStreamingPipelineBind'>ServerStreamingPipelineBind</a>&lt;T, I&gt; <span class='where fmt-newline'>where T: ServerProto&lt;<a class='struct' href='tokio_tls/struct.TlsStream.html' title='tokio_tls::TlsStream'>TlsStream</a>&lt;I&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I: <a class='trait' href='https://docs.rs/tokio-core/0.1/tokio_core/io/trait.Io.html' title='tokio_core::io::Io'>Io</a> + 'static</span>","impl&lt;T, I&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_tls/proto/struct.ServerStreamingMultiplexBind.html' title='tokio_tls::proto::ServerStreamingMultiplexBind'>ServerStreamingMultiplexBind</a>&lt;T, I&gt; <span class='where fmt-newline'>where T: ServerProto&lt;<a class='struct' href='tokio_tls/struct.TlsStream.html' title='tokio_tls::TlsStream'>TlsStream</a>&lt;I&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I: <a class='trait' href='https://docs.rs/tokio-core/0.1/tokio_core/io/trait.Io.html' title='tokio_core::io::Io'>Io</a> + 'static</span>","impl&lt;T, I&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_tls/proto/struct.ClientPipelineBind.html' title='tokio_tls::proto::ClientPipelineBind'>ClientPipelineBind</a>&lt;T, I&gt; <span class='where fmt-newline'>where T: ClientProto&lt;<a class='struct' href='tokio_tls/struct.TlsStream.html' title='tokio_tls::TlsStream'>TlsStream</a>&lt;I&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I: <a class='trait' href='https://docs.rs/tokio-core/0.1/tokio_core/io/trait.Io.html' title='tokio_core::io::Io'>Io</a> + 'static</span>","impl&lt;T, I&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_tls/proto/struct.ClientMultiplexBind.html' title='tokio_tls::proto::ClientMultiplexBind'>ClientMultiplexBind</a>&lt;T, I&gt; <span class='where fmt-newline'>where T: ClientProto&lt;<a class='struct' href='tokio_tls/struct.TlsStream.html' title='tokio_tls::TlsStream'>TlsStream</a>&lt;I&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I: <a class='trait' href='https://docs.rs/tokio-core/0.1/tokio_core/io/trait.Io.html' title='tokio_core::io::Io'>Io</a> + 'static</span>","impl&lt;T, I&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_tls/proto/struct.ClientStreamingPipelineBind.html' title='tokio_tls::proto::ClientStreamingPipelineBind'>ClientStreamingPipelineBind</a>&lt;T, I&gt; <span class='where fmt-newline'>where T: ClientProto&lt;<a class='struct' href='tokio_tls/struct.TlsStream.html' title='tokio_tls::TlsStream'>TlsStream</a>&lt;I&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I: <a class='trait' href='https://docs.rs/tokio-core/0.1/tokio_core/io/trait.Io.html' title='tokio_core::io::Io'>Io</a> + 'static</span>","impl&lt;T, I&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_tls/proto/struct.ClientStreamingMultiplexBind.html' title='tokio_tls::proto::ClientStreamingMultiplexBind'>ClientStreamingMultiplexBind</a>&lt;T, I&gt; <span class='where fmt-newline'>where T: ClientProto&lt;<a class='struct' href='tokio_tls/struct.TlsStream.html' title='tokio_tls::TlsStream'>TlsStream</a>&lt;I&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I: <a class='trait' href='https://docs.rs/tokio-core/0.1/tokio_core/io/trait.Io.html' title='tokio_core::io::Io'>Io</a> + 'static</span>","impl&lt;S:&nbsp;<a class='trait' href='https://docs.rs/tokio-core/0.1/tokio_core/io/trait.Io.html' title='tokio_core::io::Io'>Io</a>&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_tls/struct.ConnectAsync.html' title='tokio_tls::ConnectAsync'>ConnectAsync</a>&lt;S&gt;","impl&lt;S:&nbsp;<a class='trait' href='https://docs.rs/tokio-core/0.1/tokio_core/io/trait.Io.html' title='tokio_core::io::Io'>Io</a>&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_tls/struct.AcceptAsync.html' title='tokio_tls::AcceptAsync'>AcceptAsync</a>&lt;S&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()