package com.week1.factorypattern;

public class WordDocumentFactory extends DocumentFactory {

	@Override
	Document createDocument() {
		return new WordDocument();
	}

}
