( function ( blocks, element, blockEditor, i18n ) {
	var el = element.createElement;
	var __ = i18n.__;
	var useBlockProps = blockEditor.useBlockProps;

	blocks.registerBlockType( 'i13-rvg/video-grid', {
		edit: function () {
			var blockProps = useBlockProps( {
				className: 'i13-rvg-block-preview',
				style: {
					border: '1px solid #e0e0e0',
					borderRadius: '10px',
					padding: '18px 20px',
					background: '#f6f7f7',
					font: '14px/1.4 sans-serif'
				}
			} );

			return el(
				'div',
				blockProps,
				el(
					'div',
					{ style: { display: 'flex', alignItems: 'center', gap: '14px' } },
					el( 'span', {
						className: 'dashicons dashicons-format-video',
						style: { fontSize: '30px', width: '30px', height: '30px', color: '#2271b1' }
					} ),
					el(
						'div',
						null,
						el( 'strong', { style: { display: 'block', color: '#1e1e1e' } }, __( 'Video Grid', 'video-grid' ) ),
						el( 'span', { style: { color: '#646970', fontSize: '12px' } }, __( 'Your video grid will display here on the published page.', 'video-grid' ) )
					)
				),
				el(
					'div',
					{ style: { marginTop: '12px', fontSize: '12px', color: '#787c82', borderTop: '1px solid #eaeaea', paddingTop: '10px' } },
					__( 'Want multiple grids, plus Vimeo & HTML5 video? ', 'video-grid' ),
					el(
						'a',
						{ href: 'https://www.i13websolution.com/product/wordpress-responsive-video-grid-pro/', target: '_blank', rel: 'noopener', style: { color: '#2271b1', fontWeight: '600' } },
						__( 'Upgrade to Pro', 'video-grid' )
					)
				)
			);
		},
		save: function () {
			return null;
		}
	} );
} )( window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.i18n );
