from rest_framework.response import Response
from rest_framework import status
from .serializers import NoteSerializer
from .models import Note


def getNotesList(request):
    notes = Note.objects.all().order_by('-updated')
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)


def createNote(request):
    serializer = NoteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)


def getNoteDetail(request, pk):
    try:
        note = Note.objects.get(id=pk)
        serializer = NoteSerializer(instance=note)
        return Response(serializer.data, status=status.HTTP_200_OK)

    except Note.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)


def updateNote(request, pk):
    try:
        note = Note.objects.get(id=pk)
        data = request.data
        serializer = NoteSerializer(instance=note, data=data)
        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

    except Note.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)


def deleteNote(request, pk):
    try:
        note = Note.objects.get(id=pk)
        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    except Note.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
