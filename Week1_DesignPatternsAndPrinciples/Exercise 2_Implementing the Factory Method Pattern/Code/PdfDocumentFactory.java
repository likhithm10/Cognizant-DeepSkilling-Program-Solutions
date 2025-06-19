package com.week1.factorypattern;

public class PdfDocumentFactory extends DocumentFactory {

	@Override
	Document createDocument() {
		return new PdfDocument();
	}

}
