( function( $ ){

	if( $('#ihaf-header').length ) {
		var editorSettings = wp.codeEditor.defaultSettings ? _.clone( wp.codeEditor.defaultSettings ) : {};
		editorSettings.codemirror = _.extend(
			{},
			editorSettings.codemirror,
			{
				indentUnit: 2,
				tabSize: 2,
			}
		);
		wp.codeEditor.initialize( $('#ihaf-header'), editorSettings );
	}

	if( $('#ihaf-wp_body_open').length ) {
		var editorSettings = wp.codeEditor.defaultSettings ? _.clone( wp.codeEditor.defaultSettings ) : {};
		editorSettings.codemirror = _.extend(
			{},
			editorSettings.codemirror,
			{
				indentUnit: 2,
				tabSize: 2,
			}
		);
		wp.codeEditor.initialize( $('#ihaf-wp_body_open'), editorSettings );
	}

	if( $('#ihaf-footer').length ) {
		var editorSettingsb = wp.codeEditor.defaultSettings ? _.clone( wp.codeEditor.defaultSettings ) : {};
		editorSettingsb.codemirror = _.extend(
			{},
			editorSettingsb.codemirror,
			{
				indentUnit: 2,
				tabSize: 2,
			}
		);
		wp.codeEditor.initialize( $('#ihaf-footer'), editorSettingsb );
	}

}( jQuery ) );
