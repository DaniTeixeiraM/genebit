function converterGene(gene){
	var geneB = '';

	for(var i=0;i<gene.length;i++){
		if(gene[i] == 'A'){
			geneB +='1';
		}else if(gene[i] == 'B'){
			geneB +='3';
		}else if(gene[i] == 'O'){
			geneB += '0';
		}else{
			geneB = 'erro';
			break;
		}

		if(gene.length < 2){
			geneB += geneB[0];
		}
	}

	return geneB;
}

function unirGene(gene1,gene2){
	var total = 0, a = 0, b = 0, ab = 0, o = 0;
	var aleloA, aleloB;

	for(var i=0;i < gene1.length;i++){
		aleloA = parseInt(gene1[i]);
		for(var j=0; j < gene2.length;j++){
			aleloB = parseInt(gene2[j]);

			if(aleloA + aleloB == 0){
				o += 1;
			}else if(aleloA + aleloB == 1 || aleloA + aleloB == 2){
				a += 1;
			}else if(aleloA + aleloB == 3 || aleloA + aleloB == 6){
				b += 1;
			}else if(aleloA + aleloB == 4){
				ab += 1;
			}

			total += 1;
		}
	}

	a = (a/total)*100;
	b = (b/total)*100;
	ab = (ab/total)*100;
	o = (o/total)*100;

	return [a,b,ab,o];
}