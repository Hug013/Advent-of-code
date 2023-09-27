
Journal de bord :

Jour 1 : Le problème est assez simple, je n'ai pas gardé la résolution de la première partie.

Jour 2 : Le problème est assez simple aussi. Je ne sais pas la méthode que j'ai adoptée est optimale, néanmoins, elle a le mérite d'être claire, je fais une disjonction selon tous les cas possibles et y ajoute le nombre de points correspondant. Je n'ai pas gardé la résolution de la première partie.

Jour 3 : J'ai malheureusement écrasé ma deuxième partie sur la première, ne l'ayant pas conservée, mais la elle se faisait assez simplement, on vérifiait pour chaque caractère de la première partie du mot s'il était le même que le premier caractère de la seconde partie du mot, puis le deuxième, etc...
Puis, si le caractère est le même, on ajoute dans un res le score associé, on utilise la méthode charCodeAt, qui permet d'obtenir des entiers à partir de Strings. 
Pour la seconde partie, j'ai fais des itérations toutes les trois lignes, pour lesquelles j'ai cherché le caractère commun.

Jour 4 : Pour la première partie, j'étais embêté par ces paires que je comptais en double, ou pas du tout, c'est ce qui a été compliqué à gérer. J'ai donc changé de stratégie pour la deuxième partie, j'ai compté toutes les paires qui ne sont pas disjointes.

Jour 5 : J'ai passé beaucoup de temps sur les données, pour qu'elles soient simples à manipuler.
Le reste coule de source. 
J'ai pu réaliser la mutabilité des listes dans ce problème.

Jour 6 : Pour le premier problème, j'ai vérifié que tous les éléments sont différents à la main. N'ayant ni l'envie ni le temps de le faire pour le deuxième problème, j'ai défini une fonction pour le faire.

Jour7 : J'avais laissé ce problème de côté, car je ne voyais pas comment l'aborder,  ni comment gérer les données. D'autres problèmes se posaient plus spécifiquement, je n'utilisais pas bien les classes, et y revenir avec plus d'expérience était la bonne idée, la manière de structurer la donnée était bien plus instinctive, et une fois que cela est fait, le problème derrière n'était vraiment pas difficile.

Jour 8 : Beaucoup moins compliqué que le jour précédent, le traitement de la donnée est immédiat, les seuls problèmes que j'ai rencontrés sont des problèmes de bords, j'oubliais ou ajoutais des lignes et colonnes. L'idée du programme est pour chaque ligne en partant de la gauche puis de la droite, chaque colonne en partant d'en haut puis d'en bas, je conserve les maximums. Je parcours ensuite la matrice pour comparer.

Jour 9 : Les deux parties étaient conceptuellement assez simples, mais la mise en oeuvre m'a posé quelques difficultés, je pouvais passer de très longues minutes dans le vide. Mon jour deux est assez moche, je fais des distinctions de cas dans tous les sens, mais c'était le meilleur moyen que je trouvais de faire. Pour la première fois, j'ai utilisé une classe en javascript, j'ai trouvé cela très pratique, et le réutiliserai dans le futur.

Jour 10 : J'ai trouvé le problème pas forcément compliqué, mais à nouveau, la mise en oeuvre bloquait de temps en temps. La plus grosse trouvaille de ce jour est le fs.writer, avec lui, je peux afficher des sorties sans me soucier de leurs tailles. C'est très pratique. J'ai réutilisé les classes, que j'avais découvertes au jour précédent.

Jour 11 : La gestion de la données m'a demandé beaucoup de travail, j'ai à nouveau utilisé les classes, outil essentiel semble t-il, et surtout, j'ai beaucoup travaillé sur le split. Jusqu'ici, je splitais de la même manière et faisais en fonction avec ce qui ressortait, ici, j'ai travaillé la donnée pour que la sortie soit plus aisée à manier. L'astuce du ppcm n'était pas évidente non plus.

Jour12 : J'ai pris beaucoup de temps pour mettre en place un algorithme qui prenait trop de temps à s'executer, en fait chaque point était le noeud d'un arbre, et pour chaque noeud je traçais un chemin jusqu'à ce qu'il arrive à E. Cela était interminable, (j'ai laissé mon ordinateur tourner environ 30 minutes). J'ai finalement compris qu'il fallait appliquer Dijkstra, ce qui simplifiait réellement la vie. 

Jour 13 : J'ai découvert la méthode JSON.parse, et elle a été fantastique, simplifiant grandement le problème. Je ne pense pas que le code soit élégant, mais il était simple à écrire, car énumère les cas. Pour la partie 2, j'ai copié-collé une fonction de tri-fusion que j'ai trouvée sur internet.

Jour18 : La première partie était vraiment simple, la deuxième pas du tout. J'ai d'abord enlevé toutes les bulles de 1x1x1 qui se trouvaient dans le gros bloc (par programmation). Puis, avec visualisation.mjs, j'ai remarqué qu'il y avait une grosse bulle d'air en plus des cubes uniques 1x1x1. J'ai tout fait manuellement sur partie 2, j'ai compté le nombre de faces qui étaient enfermées dans le bloc de lave. Pour cela, j'ajoutais 1 à chaque fois qu'une face de bloc d'air touchait un bloc de lave. Je l'ai fait étage par étage, puis j'ai retourné le bloc de lave, pour compter les surfaces selon z, j'ai ainsi projeté le bloc dans le plan (z,x) et ai compté les surfaces de contact uniquement sur l'axe z (l'autre axe est y et est déjà compté). Le plus compliqué était lorsque je devais savoir s'il fallait compter les blocs de 1x1x1, soit, savoir s'ils étaient prolongement de la cavité, trou uniques (déjà comptés par le programme), ou ni l'un ni l'autre (à savoir en lien avec la vapeur). Je l'ai aussi fait manuellement, c'était de loin le plus fastidieux. Pour terminer il fallait que je m'occupe des cavités de taille deux blocs, il y en avait exactement 5, mais une seule était une cavité à part entière (couche 5 de la projection (z,x)), le reste était prolongement de la cavité centrale :couche 15 et couche 2 de la projection (x,y), et couche 3 et 13 de la projection (z,x).
Finalement, le comptage était éprouvant, mais je ne voyais pas de moyen de compter toutes les faces par programmation et pensais être plus rapide à compter qu'à trouver une solution. Je n'aurais jamais la réponse...
PS : pour visualiser, j'ai réutilisé la méthode fs.write que j'avais déjà utilisé jour 10.
