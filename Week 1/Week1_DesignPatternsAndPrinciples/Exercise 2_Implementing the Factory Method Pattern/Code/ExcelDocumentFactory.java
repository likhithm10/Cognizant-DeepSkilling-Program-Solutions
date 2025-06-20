package com.week1.factorypattern;

public class ExcelDocumentFactory extends DocumentFactory {

	@Override
	Document createDocument() {
		return new ExcelDocument();
	}

}
